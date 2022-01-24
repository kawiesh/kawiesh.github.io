let create= (x)=> document.createElement(x),
select= (x,y=document)=> y.querySelector(x),
selectAll= (x,y=document)=> y.querySelectorAll(x);				


selectAll("body *").forEach(i=>{
i.dataset.nosnippet= "";
});



let minus= `<svg viewBox="0 0 64 64">
<path d="M2 26h60v12H2z"/>
</svg>`;			
					
let plus= `	
<svg viewBox="0 0 64 64">
<path d="M38 26V2H26v24H2v12h24v24h12V38h24V26z"/>
</svg>`;



				
let buttons= selectAll(".button");
let sidebars= selectAll(".sidebar");


addEvent(buttons[0],sidebars[0]);
addEvent(buttons[1],sidebars[1]);


function addEvent(button,sidebar){
button.onclick= function(){
sidebar.classList.toggle("open");
if(sidebar.classList.contains("open")){
blur4me("3px","none",[button,sidebar]);
this.innerHTML= "-";	
this.innerHTML= minus;	
}
else{
blur4me("0","auto",[button,sidebar]);
this.innerHTML= "+";
this.innerHTML= plus;
}							
};

							
				
}//End





function blur4me(x,y,z){
selectAll("body>*:not(#topbar)").forEach(i=>{
i.style.filter= `blur(${x})`;
i.style.pointerEvents= y;
});


selectAll("#topbar>*").forEach(i=>{
i.style.filter= `blur(${x})`;
i.style.pointerEvents= y;							
});

z.forEach(i=>{
i.style.filter= "blur(0)";
i.style.pointerEvents= "auto";
});

}
					
				
buttons.forEach(i=>{				
i.innerHTML= plus;				
});



//----icons-------

let twitter= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524z" fill="gray"/></svg>`;

let youtube= `<svg viewBox="0 0 1024 1024" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M960 509.2c0-2.2 0-4.7-.1-7.6c-.1-8.1-.3-17.2-.5-26.9c-.8-27.9-2.2-55.7-4.4-81.9c-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2c-37.1-1.4-76.8-2.3-116.5-2.8c-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4c-39.7.5-79.4 1.4-116.5 2.8c-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9c-.3 9.7-.4 18.8-.5 26.9c0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6c.1 8.1.3 17.2.5 26.9c.8 27.9 2.2 55.7 4.4 81.9c3 36.1 7.4 66.2 13.4 88.8c12.8 47.9 50.4 85.7 98.3 98.5c28.2 7.6 83.7 12.3 161.7 15.2c37.1 1.4 76.8 2.3 116.5 2.8c13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4c39.7-.5 79.4-1.4 116.5-2.8c78-3 133.5-7.7 161.7-15.2c47.9-12.8 85.5-50.5 98.3-98.5c6.1-22.6 10.4-52.7 13.4-88.8c2.2-26.2 3.6-54 4.4-81.9c.3-9.7.4-18.8.5-26.9c0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1c-.1 7.8-.3 16.4-.5 25.7c-.7 26.6-2.1 53.2-4.2 77.9c-2.7 32.2-6.5 58.6-11.2 76.3c-6.2 23.1-24.4 41.4-47.4 47.5c-21 5.6-73.9 10.1-145.8 12.8c-36.4 1.4-75.6 2.3-114.7 2.8c-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8c-71.9-2.8-124.9-7.2-145.8-12.8c-23-6.2-41.2-24.4-47.4-47.5c-4.7-17.7-8.5-44.1-11.2-76.3c-2.1-24.7-3.4-51.3-4.2-77.9c-.3-9.3-.4-18-.5-25.7c0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1c.1-7.8.3-16.4.5-25.7c.7-26.6 2.1-53.2 4.2-77.9c2.7-32.2 6.5-58.6 11.2-76.3c6.2-23.1 24.4-41.4 47.4-47.5c21-5.6 73.9-10.1 145.8-12.8c36.4-1.4 75.6-2.3 114.7-2.8c13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8c71.9 2.8 124.9 7.2 145.8 12.8c23 6.2 41.2 24.4 47.4 47.5c4.7 17.7 8.5 44.1 11.2 76.3c2.1 24.7 3.4 51.3 4.2 77.9c.3 9.3.4 18 .5 25.7c0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135l-232-133z" fill="gray"/></svg>`;

let telegram= `<svg viewBox="0 0 256 256" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M231.3 31.7A16.1 16.1 0 0 0 215 29L30.4 101.5a15.8 15.8 0 0 0-10.1 16.3a16 16 0 0 0 12.8 14.3l46.9 9.3V200a16 16 0 0 0 9.9 14.8A16.6 16.6 0 0 0 96 216a15.8 15.8 0 0 0 11.3-4.7l26-25.9l39.3 34.6a16 16 0 0 0 10.5 4a14.2 14.2 0 0 0 5-.8a15.9 15.9 0 0 0 10.7-11.6l37.6-164.2a16 16 0 0 0-5.1-15.7zM86.1 126.3l-49.8-9.9l139.6-54.9zM96 200v-47.4l25.2 22.2zm87.2 8l-82.4-72.5l118.7-85.7z" fill="gray"/></svg>`;

let pastebin= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M17.02 0a2.096 2.096 0 0 0-.722.123L2.624 5.003A2.1 2.1 0 0 0 1.35 7.69l5.324 14.915a2.101 2.101 0 0 0 2.685 1.272l7.746-2.765c.792-.307 1.345-.534 1.464-.608c.543-.314.962-.817 1.964-2.334c.904-1.362 1.859-3.323 2.097-4.28c.24-.97.239-1.48-.502-3.674l-3.146-8.82A2.102 2.102 0 0 0 17.02 0zm-.083.414c.72-.031 1.4.403 1.657 1.12l3.68 10.357c.103.433-.281 1.147-.736 1.35c-.2.1-.71.293-1.142.429c-1.397.463-2.05.878-2.458 1.547c-.363.591-.315 1.18.16 2.377c.462 1.142.533 1.864.225 2.4c-.113.188-.301.322-1.354.733l-.002-.005l-7.746 2.765a1.68 1.68 0 0 1-2.157-1.022L1.74 7.55a1.68 1.68 0 0 1 1.022-2.157L16.437.513c.165-.06.334-.092.5-.099zM15.9 2.25l-1.203.885l.187.519l.523-.316l.803 2.235l-.696.249c.045.145.216.642.238.664l2.166-.78l-.238-.662l-.687.248zm-3.29 1.182l-1.203.885l.186.519l.524-.316l.803 2.235l-.697.25c.046.144.216.64.238.663l2.167-.778l-.238-.663l-.687.247zM9.085 4.786c-.283 0-.56.076-.8.223c-.732.448-.85 1.383-.332 2.558c.337.776.873 1.218 1.462 1.215c1.345-.007 1.86-1.4 1.085-2.95c-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.01.357.085.539.279c.145.155.347.51.437.787c.35.998.164 1.688-.414 1.546C8.855 7.93 8.21 6 8.62 5.585a.407.407 0 0 1 .273-.127zm-3.765.75c-.283 0-.56.076-.8.223c-.732.448-.85 1.382-.332 2.557c.337.777.873 1.218 1.462 1.215c1.344-.007 1.86-1.398 1.085-2.95c-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.168-.01.358.085.54.278c.145.155.347.51.437.787c.35.999.164 1.689-.415 1.547c-.6-.141-1.243-2.072-.834-2.485a.407.407 0 0 1 .272-.127zm13.362.655c-.283 0-.56.076-.8.223c-.732.448-.85 1.382-.332 2.558c.337.776.873 1.218 1.462 1.215c1.345-.007 1.86-1.4 1.085-2.95c-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.01.357.085.539.278c.145.155.347.51.437.787c.35.999.164 1.689-.414 1.547c-.601-.141-1.244-2.072-.835-2.485a.407.407 0 0 1 .273-.127zm-3.766.75a1.532 1.532 0 0 0-.8.222c-.73.448-.848 1.383-.331 2.558c.337.776.873 1.218 1.462 1.215c1.344-.007 1.86-1.398 1.085-2.95c-.307-.66-.838-1.036-1.416-1.045zm-.19.67c.167-.008.357.086.539.28c.145.155.347.51.437.787c.35.998.164 1.688-.415 1.547c-.6-.142-1.244-2.072-.835-2.485a.408.408 0 0 1 .273-.128zm-3.746.744a1.52 1.52 0 0 0-.8.223c-.732.448-.85 1.382-.332 2.557c.337.777.873 1.218 1.462 1.215c1.345-.007 1.86-1.398 1.085-2.95c-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.169-.01.358.085.54.278c.145.155.347.51.437.787c.35.999.164 1.689-.414 1.547c-.601-.141-1.244-2.072-.835-2.485a.407.407 0 0 1 .272-.127zm-3.515.616l-1.203.884l.187.52l.524-.316l.802 2.233l-.696.25c.045.145.216.641.238.663l2.166-.778l-.238-.663l-.687.247zm15.664 1.33c.034 0 .049.047.064.135c.023.11-.064.545-.195.957c-.47 1.435-2.052 4.223-3.08 5.396l-.407.47l.05-.667c.03-.567-.015-.812-.376-1.71c-.496-1.263-.533-1.73-.158-2.31c.34-.514 1.028-.907 2.448-1.37c.72-.238 1.175-.463 1.385-.664c.132-.145.207-.22.253-.235a.048.048 0 0 1 .015-.003zm-6.43 1.476l-1.202.885l.187.52l.523-.317l.803 2.235l-.696.25c.045.144.216.641.238.663l2.166-.779l-.238-.662l-.687.247l-1.093-3.042zm-3.578 1.33c-.283 0-.56.077-.8.223c-.731.448-.85 1.382-.332 2.558c.337.776.873 1.218 1.462 1.215c1.345-.007 1.86-1.399 1.086-2.95c-.307-.66-.838-1.036-1.416-1.046zm-.191.672c.168-.009.358.085.54.28c.144.153.346.51.437.786c.35.998.164 1.688-.415 1.546c-.6-.14-1.244-2.072-.835-2.485a.407.407 0 0 1 .273-.127zm-3.515.616l-1.204.885l.187.52l.524-.317l.803 2.234l-.697.25c.045.145.216.642.238.664l2.166-.779l-.238-.663l-.687.248l-1.092-3.042z" fill="gray"/></svg>`;

let web= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="gray"/></svg>`;

let blogger= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><g fill="gray"><path d="M13.81 17c1.744 0 3.16-1.42 3.17-3.154l.02-2.553l-.03-.14l-.083-.174l-.142-.11c-.184-.144-1.116.01-1.367-.218c-.178-.163-.206-.456-.26-.855c-.1-.771-.163-.811-.284-1.073c-.44-.929-1.63-1.627-2.448-1.723h-2.217A3.174 3.174 0 0 0 7 10.16v3.686C7 15.58 8.426 17 10.17 17h3.64zm-3.6-7.419h1.757c.335 0 .607.273.607.604c0 .33-.272.604-.607.604H10.21a.608.608 0 0 1-.607-.604c0-.331.271-.604.607-.604zM9.603 13.8c0-.33.271-.601.607-.601h3.57c.333 0 .604.27.604.601c0 .327-.27.601-.604.601h-3.57a.607.607 0 0 1-.607-.601z"/><path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/></g></svg>`;

let radio= `<svg viewBox="0 0 32 32" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M28 10h-4V2h-2v8h-9V8h-2v2H8V8H6v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2zM4 28V12h24v16z" fill="gray"/><path d="M10 26a4 4 0 1 1 4-4a4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2z" fill="gray"/><path d="M7 14h6v2H7z" fill="gray"/><path d="M17 16h9v2h-9z" fill="gray"/><path d="M17 20h9v2h-9z" fill="gray"/><path d="M17 24h9v2h-9z" fill="gray"/></svg>`;

let text= `<svg viewBox="0 0 36 36" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M12.19 8.84a1.45 1.45 0 0 0-1.4-1h-.12a1.46 1.46 0 0 0-1.42 1L1.14 26.56a1.29 1.29 0 0 0-.14.59a1 1 0 0 0 1 1a1.12 1.12 0 0 0 1.08-.77l2.08-4.65h11l2.08 4.59a1.24 1.24 0 0 0 1.12.83a1.08 1.08 0 0 0 1.08-1.08a1.64 1.64 0 0 0-.14-.57zM6.08 20.71l4.59-10.22l4.6 10.22z" class="clr-i-outline clr-i-outline-path-1" fill="gray"/><path d="M32.24 14.78a6.35 6.35 0 0 0-4.64-1.58a11.36 11.36 0 0 0-4.7 1a1 1 0 0 0-.58.89a1 1 0 0 0 .94.92a1.23 1.23 0 0 0 .39-.08a8.87 8.87 0 0 1 3.72-.81c2.7 0 4.28 1.33 4.28 3.92v.5a15.29 15.29 0 0 0-4.42-.61c-3.64 0-6.14 1.61-6.14 4.64v.05c0 2.95 2.7 4.48 5.37 4.48a6.29 6.29 0 0 0 5.19-2.48v1.28a1 1 0 0 0 1 1a1 1 0 0 0 1-1.06V19a5.71 5.71 0 0 0-1.41-4.22zm-.56 7.7c0 2.28-2.17 3.89-4.81 3.89c-1.94 0-3.61-1.06-3.61-2.86v-.06c0-1.8 1.5-3 4.2-3a15.2 15.2 0 0 1 4.22.61z" class="clr-i-outline clr-i-outline-path-2" fill="gray"/></svg>`;

let html= `<svg viewBox="0 0 256 256" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M208 88h-56V32z" opacity=".2" fill="gray"/><path d="M128 176a8 8 0 0 1-8 8h-8v32a8 8 0 0 1-16 0v-32h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8zm-64-8a8 8 0 0 0-8 8v12H44v-12a8 8 0 0 0-16 0v40a8 8 0 0 0 16 0v-12h12v12a8 8 0 0 0 16 0v-40a8 8 0 0 0-8-8zm172 40h-16v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h24a8 8 0 0 0 0-16zm-49.6-39.6a7.8 7.8 0 0 0-8.9 3L164 190.2l-13.5-18.8A8 8 0 0 0 136 176v40a8 8 0 0 0 16 0v-15l5.5 7.6a7.9 7.9 0 0 0 13 0l5.5-7.6v15a8 8 0 0 0 16 0v-40a7.8 7.8 0 0 0-5.6-7.6zM208 136a8 8 0 0 1-8-8V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8.1 8.1 0 0 1 5.7 2.3l55.9 56A7.8 7.8 0 0 1 216 88v40a8 8 0 0 1-8 8zm-48-56h28.7L160 51.3z" fill="gray"/></svg>`;

let blog= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M7.72 16.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L8.239 14.635l-.52 1.82zM20.703 2.664l.635.643c.876.887.884 2.318.016 3.196L10.428 17.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L17.544 2.647a2.215 2.215 0 0 1 3.159.016zM9.184 3.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H5.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H5.592C3.608 21.994 2 20.366 2 18.358V7.452c0-2.007 1.608-3.635 3.592-3.635h3.592z" fill="gray"/></svg>`;

let table= `<svg viewBox="0 0 32 32" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v4H5V5zm-10 6h10v7H17zm-2 7H5v-7h10zM5 20h10v7H5zm12 7v-7h10v7z" fill="gray"/></svg>`;

let lister= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><g fill="none"><path d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;

let bm= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><g fill="none"><path d="M18 20.5h-7.034a2.939 2.939 0 0 1-.702 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828a.491.491 0 0 0-.049-.04a.63.63 0 0 1-.036-.03a2.072 2.072 0 0 0-.219-.18a.652.652 0 0 0-.08-.044l-.048-.024l-.05-.029c-.054-.031-.109-.063-.166-.087a1.977 1.977 0 0 0-.624-.138c-.02-.001-.04-.004-.059-.007A.605.605 0 0 0 12.172 2H6a2 2 0 0 0-2 2v10.018a1.745 1.745 0 0 1 1.5.508V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5zm-.622-12H14a.5.5 0 0 1-.5-.5V4.621L17.378 8.5zM4.25 15a.75.75 0 0 1 .75.75V20a2 2 0 1 1-4 0v-.25a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 1 0v-4.25a.75.75 0 0 1 .75-.75zm3.7 0A1.95 1.95 0 0 0 6 16.95v.234c0 .614.323 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20A.75.75 0 0 0 6 20v.05A1.95 1.95 0 0 0 7.95 22h.1A1.95 1.95 0 0 0 10 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 8.05 15h-.1z" fill="gray"/></g></svg>`;

let folder= `<svg viewBox="0 0 1024 1024" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M159 768h612.3l103.4-256H262.3z" fill-opacity=".15" fill="gray"/><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" fill="gray"/></svg>`;

let github= `<svg viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.545c-6.055 0-10.957 4.877-10.957 10.883c0 4.41 2.643 8.205 6.447 9.912c.398.179.787.108 1.091-.12a1.38 1.38 0 0 0 .532-1.107v-.57l-1.357-.184a.489.489 0 0 1-.03-.005c-.748-.146-1.253-.409-1.623-.788c-.311-.319-.501-.701-.662-1.025l-.056-.113a11.645 11.645 0 0 0-.487-.91c-.135-.214-.24-.324-.344-.393c-.264-.175-.518-.472-.518-.843a.72.72 0 0 1 .26-.56a.844.844 0 0 1 .546-.182c.222 0 .431.068.605.146c.178.08.355.186.52.296c.402.268.798.585 1.133.976c.349.406.596.664.968.717c.306.044.618.045.861.034a2.558 2.558 0 0 1 .166-.56a8.347 8.347 0 0 1-.877-.256c-.654-.232-1.383-.593-1.873-1.14c-.538-.602-.871-1.139-1.057-1.767c-.181-.612-.211-1.275-.211-2.091c0-1.25.541-2.303.947-2.862a8.655 8.655 0 0 1-.335-1.501a3.515 3.515 0 0 1 .001-.968c.05-.293.175-.653.504-.87c.317-.211.689-.202.979-.148c.301.057.614.182.902.325c.469.232.935.542 1.284.805c.602-.177 1.667-.405 2.63-.426h.022c.964.021 1.981.249 2.568.425c.35-.262.815-.573 1.283-.804c.288-.143.6-.268.902-.325c.29-.054.662-.063.98.147c.328.218.454.578.503.871c.051.305.039.646 0 .968a8.661 8.661 0 0 1-.334 1.501c.406.56.947 1.613.947 2.862c0 .816-.03 1.479-.21 2.09c-.187.63-.52 1.166-1.058 1.768c-.49.547-1.219.908-1.873 1.14a8.45 8.45 0 0 1-1.062.297c.123.372.167.673.167.846v3.09c0 .47.219.871.53 1.105c.302.229.69.3 1.088.126c3.84-1.692 6.514-5.497 6.514-9.93c0-6.005-4.9-10.882-10.956-10.882zM9.476 18.71c-.26.037-.001 0-.001 0h-.003l-.008.002l-.029.004a6.523 6.523 0 0 1-.447.037c-.282.013-.669.014-1.066-.043c-.791-.112-1.272-.672-1.583-1.036l-.03-.034a3.6 3.6 0 0 0-.327-.333c.103.19.21.402.325.63l.01.02l.051.104c.175.348.29.58.481.774c.186.19.476.374 1.062.49l1.794.243a.522.522 0 0 1 .452.518v1.027c0 .8-.375 1.513-.95 1.945a2.087 2.087 0 0 1-2.143.236C2.902 21.427 0 17.27 0 12.428C0 5.836 5.377.5 12 .5s12 5.336 12 11.928c0 4.867-2.939 9.035-7.137 10.886a2.09 2.09 0 0 1-2.137-.247a2.426 2.426 0 0 1-.946-1.942v-3.09c0-.07-.049-.474-.322-1.017a.524.524 0 0 1 .408-.755c.343-.038.921-.149 1.504-.356c.594-.21 1.127-.498 1.444-.852c.471-.526.706-.93.835-1.367c.134-.453.168-.98.168-1.793c0-1.141-.6-2.1-.876-2.409a.523.523 0 0 1-.104-.523c.14-.394.31-1.007.375-1.554c.032-.275.034-.505.006-.671a.457.457 0 0 0-.054-.173a.486.486 0 0 0-.207.009c-.17.032-.387.112-.633.234c-.49.242-1 .6-1.316.856a.52.52 0 0 1-.505.085A9.306 9.306 0 0 0 12 7.296c-1.007.024-2.169.31-2.566.453a.52.52 0 0 1-.505-.085a7.775 7.775 0 0 0-1.316-.856a2.607 2.607 0 0 0-.634-.234a.486.486 0 0 0-.206-.009a.456.456 0 0 0-.054.173c-.028.166-.026.396.006.671c.065.547.236 1.16.375 1.554c.063.18.024.38-.104.523c-.276.309-.876 1.268-.876 2.409c0 .812.034 1.34.168 1.793c.13.437.364.84.834 1.367c.318.354.85.642 1.445.852a7.194 7.194 0 0 0 1.503.356a.522.522 0 0 1 .246.945c-.165.118-.274.33-.335.575a1.944 1.944 0 0 0-.056.385v.019a.523.523 0 0 1-.449.523z" fill="gray"/></g></svg>`;

let dead = `<svg viewBox="0 0 512 512"><path fill="gray" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16zm147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.332 207.332 0 0 1-44.589 66.125z"/><path fill="gray" d="M168 320h176v32H168z"/><path fill="gray" d="M210.63 228.042l-24.042-21.371l21.37-24.041l-23.916-21.26l-21.371 24.042l-24.041-21.37l-21.26 23.916l24.042 21.371l-21.37 24.041l23.916 21.26l21.371-24.042l24.041 21.37l21.26-23.916z"/><path fill="gray" d="M383.958 182.63l-23.916-21.26l-21.371 24.042l-24.041-21.37l-21.26 23.916l24.042 21.371l-21.37 24.041l23.916 21.26l21.371-24.042l24.041 21.37l21.26-23.916l-24.042-21.371l21.37-24.041z"/></svg>`;

let icons= [twitter,youtube,telegram,github,pastebin,blogger,blog,radio,web,text,table,html,lister,bm,folder,dead,dead,dead,dead];

let selectors=`.sidebar a[href*=twitter]
.sidebar a[href*=youtube]
.sidebar a[href*=t\\.me]
.sidebar a[href*=github]
.sidebar a[href*=pastebin]
.sidebar a[href="https://www.kawiesh.ga"]
.sidebar a[href="https://blog.kawiesh.ml"]
.sidebar a[href="http://kawiesh.tk"]
.sidebar a[href="https://kawiesh.ml"]
.texttools a[href*=text]
.othertools a[href*=table]
.othertools a[href*=html-editor]
.othertools a[href*=lister]
.othertools a[href*=bookmarklet]
.other a
.sidebar a[href="https://krishan.eu.org"]
.sidebar a[href="http://kawiesh.cf"]
.sidebar a[href="https://kawiesh.uk.to"]
.sidebar a[href="https://krishan.gq"]`;

selectors= selectors.split("\n");

selectors.forEach((i,x)=>{
let main= selectAll(i);
main.forEach((a,b)=>{
let spanz= create("span");
spanz.className= "icon";
spanz.innerHTML= icons[x];
a.parentNode.append(spanz);
});
});





let loading= `<svg viewBox="0 0 55 80" fill="gray">
    <g transform="matrix(1 0 0 -1 0 80)">
        <rect width="10" height="20" rx="3">
            <animate attributeName="height"
                 begin="0s" dur="4.3s"
                 values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="15" width="10" height="80" rx="3">
            <animate attributeName="height"
                 begin="0s" dur="2s"
                 values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="30" width="10" height="50" rx="3">
            <animate attributeName="height"
                 begin="0s" dur="1.4s"
                 values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
        <rect x="45" width="10" height="30" rx="3">
            <animate attributeName="height"
                 begin="0s" dur="2s"
                 values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
                 repeatCount="indefinite" />
        </rect>
    </g>
</svg>`;





let audio= select("audio");
let audiosrc=[
"https://drive.uber.radio/uber/bollywooduditnarayan/icecast.audio",
"https://drive.uber.radio/uber/bollywoodalkayagnik/icecast.audio"
];


				
audio.src= "";
audio.load(); audio.play();




let stations= selectAll(".radio");

stations.forEach(i=>{
let spanz= create("span");
i.append(spanz);
spanz.className= "icon";
});





function playRadio(station,src){
if(station.className!="playing"){

stations.forEach(i=>{
audio.pause();
i.className= "";
select("span",i).innerHTML= "";
});

audio.src= src;
audio.load();
audio.play();
station.className= "playing";
select("span",station).innerHTML= loading;

}	
}


stations[0].onclick= function(){
playRadio(this,audiosrc[0]);
};

stations[1].onclick= function(){
playRadio(this,audiosrc[1]);
};



