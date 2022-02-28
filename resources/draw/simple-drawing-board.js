(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SimpleDrawingBoard = {}));
}(this, (function (exports) { 'use strict';

  /**
   *
   * Minimul EventEmitter implementation
   * See `https://gist.github.com/leader22/3ab8416ce41883ae1ccd`
   *
   */
  class Eve {
    constructor() {
      this._events = {};
    }

    on(evName, handler) {
      const events = this._events;

      if (!(evName in events)) {
        events[evName] = [];
      }
      events[evName].push(handler);
    }

    off(evName, handler) {
      const events = this._events;

      if (!(evName in events)) {
        return;
      }
      if (!handler) {
        events[evName] = [];
      }

      const handlerIdx = events[evName].indexOf(handler);
      if (handlerIdx >= 0) {
        events[evName].splice(handlerIdx, 1);
      }
    }

    trigger(evName, evData) {
      const events = this._events;

      if (!(evName in events)) {
        return;
      }

      for (let i = 0; i < events[evName].length; i++) {
        const handler = events[evName][i];
        handler.handleEvent
          ? handler.handleEvent.call(this, evData)
          : handler.call(this, evData);
      }
    }

    removeAllListeners() {
      this._events = {};
    }
  }

  /**
   *
   * History for undo/redo Structure(mutable)
   * See `https://gist.github.com/leader22/9fbed07106d652ef40fda702da4f39c4`
   *
   */
  class History {
    constructor(initialValue = null) {
      this._past = [];
      this._present = initialValue;
      this._future = [];
    }

    get value() {
      return this._present;
    }

    undo() {
      if (this._past.length === 0) return;

      const previous = this._past.pop();
      this._future.unshift(this._present);
      this._present = previous;
    }

    redo() {
      if (this._future.length === 0) return;

      const next = this._future.shift();
      this._past.push(this._present);
      this._present = next;
    }

    save(newPresent) {
      if (this._present === newPresent) return;

      this._past.push(this._present);
      this._future.length = 0;
      this._present = newPresent;
    }

    clear() {
      this._past.length = 0;
      this._future.length = 0;
    }
  }

  function isTouch() {
    return "ontouchstart" in window.document;
  }

  // expect HTML elements from CanvasImageSource
  function isDrawableElement($el) {
    if ($el instanceof HTMLImageElement) return true;
    if ($el instanceof SVGImageElement) return true;
    if ($el instanceof HTMLCanvasElement) return true;
    if ($el instanceof HTMLVideoElement) return true;
    return false;
  }

  function isBase64DataURL(url) {
    if (typeof url !== "string") return false;
    if (!url.startsWith("data:image/")) return false;
    return true;
  }

  async function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => resolve(img);
      img.src = src;
    });
  }

  function getMidInputCoords(old, coords) {
    return {
      x: (old.x + coords.x) >> 1,
      y: (old.y + coords.y) >> 1,
    };
  }

  function getInputCoords(ev, $el) {
    let x, y;
    if (isTouch()) {
      x = ev.touches[0].pageX;
      y = ev.touches[0].pageY;
    } else {
      x = ev.pageX;
      y = ev.pageY;
    }

    // check this every time for real-time resizing
    const elBCRect = $el.getBoundingClientRect();

    // need to consider scrolled positions
    const elRect = {
      left: elBCRect.left + window.pageXOffset,
      top: elBCRect.top + window.pageYOffset,
    };

    // if canvas has styled
    const elScale = {
      x: $el.width / elBCRect.width,
      y: $el.height / elBCRect.height,
    };

    return {
      x: (x - elRect.left) * elScale.x,
      y: (y - elRect.top) * elScale.y,
    };
  }

  class SimpleDrawingBoard {
    constructor($el) {
      this._$el = $el;
      this._ctx = this._$el.getContext("2d");

      // handwriting fashion ;D
      this._ctx.lineCap = this._ctx.lineJoin = "round";

      // for canvas operation
      this._isDrawMode = true;

      // for drawing
      this._isDrawing = false;
      this._timer = null;
      this._coords = {
        old: { x: 0, y: 0 },
        oldMid: { x: 0, y: 0 },
        current: { x: 0, y: 0 },
      };

      this._ev = new Eve();
      this._history = new History(this.toDataURL());

      this._bindEvents();
      this._drawFrame();
    }

    get canvas() {
      return this._$el;
    }

    get observer() {
      return this._ev;
    }

    get mode() {
      return this._isDrawMode ? "draw" : "erase";
    }

    setLineSize(size) {
      this._ctx.lineWidth = size | 0 || 1;
    }

    setLineColor(color) {
      this._ctx.strokeStyle = color;
    }

    fill(color) {
      const ctx = this._ctx;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      this._saveHistory();
    }

    clear() {
      const ctx = this._ctx;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      this._saveHistory();
    }

    toggleMode() {
      this._ctx.globalCompositeOperation = this._isDrawMode
        ? "destination-out"
        : "source-over";
      this._isDrawMode = !this._isDrawMode;
    }

    toDataURL({ type, quality } = {}) {
      return this._ctx.canvas.toDataURL(type, quality);
    }

    fillImageByElement($el, { isOverlay = false } = {}) {
      if (!isDrawableElement($el))
        throw new TypeError("Passed element is not a drawable!");

      const ctx = this._ctx;
      // if isOverlay is true, do not clear current canvas
      if (!isOverlay) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage($el, 0, 0, ctx.canvas.width, ctx.canvas.height);

      this._saveHistory();
    }

    async fillImageByDataURL(src, { isOverlay = false } = {}) {
      if (!isBase64DataURL(src))
        throw new TypeError("Passed src is not a base64 data URL!");

      const img = await loadImage(src);

      const ctx = this._ctx;
      // if isOverlay is true, do not clear current canvas
      if (!isOverlay) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);

      this._saveHistory();
    }

    async undo() {
      this._history.undo();
      const base64 = this._history.value;
      if (!isBase64DataURL(base64)) return;

      const img = await loadImage(base64);

      const ctx = this._ctx;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    async redo() {
      this._history.redo();
      const base64 = this._history.value;
      if (!isBase64DataURL(base64)) return;

      const img = await loadImage(base64);

      const ctx = this._ctx;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    destroy() {
      this._unbindEvents();

      this._ev.removeAllListeners();
      this._history.clear();

      cancelAnimationFrame(this._timer);
      this._timer = null;
    }

    handleEvent(ev) {
      ev.preventDefault();
      ev.stopPropagation();

      switch (ev.type) {
        case "mousedown":
        case "touchstart":
          this._onInputDown(ev);
          break;
        case "mousemove":
        case "touchmove":
          this._onInputMove(ev);
          break;
        case "mouseup":
        case "touchend":
          this._onInputUp();
          break;
        case "mouseout":
        case "touchcancel":
        case "gesturestart":
          this._onInputCancel();
          break;
      }
    }

    _bindEvents() {
      const events = isTouch()
        ? ["touchstart", "touchmove", "touchend", "touchcancel", "gesturestart"]
        : ["mousedown", "mousemove", "mouseup", "mouseout"];

      for (const ev of events) {
        this._$el.addEventListener(ev, this, false);
      }
    }
    _unbindEvents() {
      const events = isTouch()
        ? ["touchstart", "touchmove", "touchend", "touchcancel", "gesturestart"]
        : ["mousedown", "mousemove", "mouseup", "mouseout"];

      for (const ev of events) {
        this._$el.removeEventListener(ev, this, false);
      }
    }

    _drawFrame() {
      this._timer = requestAnimationFrame(() => this._drawFrame());

      if (!this._isDrawing) return;

      const isSameCoords =
        this._coords.old.x === this._coords.current.x &&
        this._coords.old.y === this._coords.current.y;

      const currentMid = getMidInputCoords(
        this._coords.old,
        this._coords.current
      );
      const ctx = this._ctx;

      ctx.beginPath();
      ctx.moveTo(currentMid.x, currentMid.y);
      ctx.quadraticCurveTo(
        this._coords.old.x,
        this._coords.old.y,
        this._coords.oldMid.x,
        this._coords.oldMid.y
      );
      ctx.stroke();

      this._coords.old = this._coords.current;
      this._coords.oldMid = currentMid;

      if (!isSameCoords) this._ev.trigger("draw", this._coords.current);
    }

    _onInputDown(ev) {
      this._isDrawing = true;

      const coords = getInputCoords(ev, this._$el);
      this._coords.current = this._coords.old = coords;
      this._coords.oldMid = getMidInputCoords(this._coords.old, coords);

      this._ev.trigger("drawBegin", this._coords.current);
    }

    _onInputMove(ev) {
      this._coords.current = getInputCoords(ev, this._$el);
    }

    _onInputUp() {
      this._ev.trigger("drawEnd", this._coords.current);
      this._saveHistory();

      this._isDrawing = false;
    }

    _onInputCancel() {
      if (this._isDrawing) {
        this._ev.trigger("drawEnd", this._coords.current);
        this._saveHistory();
      }

      this._isDrawing = false;
    }

    _saveHistory() {
      this._history.save(this.toDataURL());
      this._ev.trigger("save", this._history.value);
    }
  }

  function create($el) {
    if (!($el instanceof HTMLCanvasElement))
      throw new TypeError("HTMLCanvasElement must be passed as first argument!");

    const sdb = new SimpleDrawingBoard($el);
    return sdb;
  }

  exports.create = create;

  Object.defineProperty(exports, '__esModule', { value: true });

})));



/* ICONS */

let zoomouticon= `<svg viewBox="0 0 24 24">
<path d="M16.121 6.465L14 4.344V10h5.656l-2.121-2.121l3.172-3.172l-1.414-1.414zM4.707 3.293L3.293 4.707l3.172 3.172L4.344 10H10V4.344L7.879 6.465zM19.656 14H14v5.656l2.121-2.121l3.172 3.172l1.414-1.414l-3.172-3.172zM6.465 16.121l-3.172 3.172l1.414 1.414l3.172-3.172L10 19.656V14H4.344z"/></svg>`;

let zoominicon= `<svg viewBox="0 0 24 24">
<path d="M21 15.344l-2.121 2.121l-3.172-3.172l-1.414 1.414l3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121l3.172 3.172l1.414-1.414l-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121l-3.172 3.172l1.414 1.414l3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121l3.172-3.172l-1.414-1.414l-3.172 3.172L3 15.344z"/></svg>`;


let redoicon= `<svg viewBox="0 0 512 512">
<path d="M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252L252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84c-28.75 13.25-49.6 33.05-72.08 58.7L48 440z"/></svg>`;

let undoicon= `<svg viewBox="0 0 512 512">
<path d="M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7c-26.61-12.26-60-18.65-104.27-19.84V432L48 252L259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z"/></svg>`;

let clearicon= `<svg viewBox="0 0 512 512">
<path d="M96 472a23.82 23.82 0 0 0 23.579 24h272.842A23.82 23.82 0 0 0 416 472V152H96zm32-288h256v280H128z"/>
<path d="M168 216h32v200h-32z"/>
<path d="M240 216h32v200h-32z"/>
<path d="M312 216h32v200h-32z"/>
<path d="M328 88V40c0-13.458-9.488-24-21.6-24H205.6C193.488 16 184 26.542 184 40v48H64v32h384V88zM216 48h80v40h-80z"/></svg>`;


let erasericon= `<svg viewBox="0 0 16 16">
<path d="M8.1 14l6.4-7.2c.6-.7.6-1.8-.1-2.5l-2.7-2.7c-.3-.4-.8-.6-1.3-.6H8.6c-.5 0-1 .2-1.4.6L.5 9.2c-.6.7-.6 1.9.1 2.5l2.7 2.7c.3.4.8.6 1.3.6H16v-1H8.1zm-1.3-.1s0-.1 0 0l-2.7-2.7c-.4-.4-.4-.9 0-1.3L7.5 6h-1l-3 3.3c-.6.7-.6 1.7.1 2.4L5.9 14H4.6c-.2 0-.4-.1-.6-.2L1.2 11c-.3-.3-.3-.8 0-1.1L4.7 6h1.8L10 2h1L7.5 6l3.1 3.7l-3.5 4c-.1.1-.2.1-.3.2z"/></svg>`;


let pencilicon= `<svg viewBox="0 0 64 64">
<path d="M59.466 6.317l-1.783-1.784a8.654 8.654 0 0 0-12.234 0L9.419 40.565L2.278 59.237c-.838 2.21.281 3.323 2.484 2.481l18.675-7.134l36.029-36.033c3.381-3.376 3.377-8.853 0-12.234m-22.629 9.486l2.508 2.507l-24.764 24.766l-2.508-2.509l24.764-24.764m3.834 3.834l3.695 3.696l-24.763 24.765l-3.695-3.695l24.763-24.766M11.026 57.32l-4.342-4.346l4.201-10.941L21.964 53.11l-10.938 4.21m12.411-5.387l-2.506-2.509l24.762-24.765l2.508 2.509l-24.764 24.765m26.209-26.21L38.281 14.36l2.827-2.828l11.365 11.363l-2.827 2.828"/></svg>`;



