let clip=
`<path d="M29 4h-9c0-2.209-1.791-4-4-4s-4 
1.791-4 4h-9c-0.552 0-1 0.448-1 1v26c0 0.552 0.448 1 1 1h26c0.552 0 
1-0.448 1-1v-26c0-0.552-0.448-1-1-1zM16 2c1.105 0 2 0.895 2 2s-0.895 
2-2 2c-1.105 0-2-0.895-2-2s0.895-2 2-2zM28 30h-24v-24h4v3c0 0.552 0.448 
1 1 1h14c0.552 0 1-0.448 1-1v-3h4v24z"></path>
<path d="M14 26.828l-6.414-7.414 1.828-1.828 
4.586 3.586 8.586-7.586 1.829 1.828z"></path>`,

pointleft=
`<path d="M19 30h-5c-1.654 0-3-1.346-3-3 0-0.535 0.14-1.037 
0.386-1.472-0.833-0.534-1.386-1.467-1.386-2.528 0-0.768 0.29-1.469 
0.766-2-0.476-0.531-0.766-1.232-0.766-2 0-0.35 0.060-0.687 
0.171-1h-7.171c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501c-0.262-0.454-0.401-0.973-0.401-1.499 
0-1.654 1.346-3 3-3 0.824 0 1.592 0.327 2.163 0.921 0.007 0.008 0.015 0.015 0.022 0.023l6.815 
7.474v-1.419c0-0.552 0.448-1 1-1h6c0.552 0 1 0.448 1 1v20c0 0.552-0.448 1-1 1h-6c-0.552 
0-1-0.448-1-1v-1.382l-4.553 2.276c-0.139 0.069-0.292 0.106-0.447 0.106zM27 28c0.552 0 1-0.448 
1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM18.764 28l5.236-2.618v-11.995l-8.287-9.088c-0.19-0.193-0.443-0.299-0.713-0.299-0.551 
0-1 0.449-1 1 0 0.171 0.041 0.332 0.122 0.479 0.010 0.017 0.020 0.033 0.029 0.051l3.732 7c0.165 0.31 0.156 
0.684-0.025 0.985s-0.506 0.485-0.857 0.485h-14c-0.551 0-1 0.449-1 1s0.449 1 1 1h10c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.551 
0-1 0.449-1 1s0.449 1 1 1c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.551 0-1 0.449-1 1s0.449 1 1 1h1c0.552 0 1 0.448 1 1s-0.448 
1-1 1c-0.551 0-1 0.449-1 1s0.449 1 1 1h4.764z"></path`,

pointright=
`<path d="M13 30h5c1.654 0 3-1.346 3-3 0-0.535-0.14-1.037-0.387-1.472 0.833-0.534 1.387-1.467 1.387-2.528 
0-0.768-0.29-1.469-0.766-2 0.476-0.531 0.766-1.232 0.766-2 0-0.35-0.060-0.687-0.171-1h7.171c1.654 0 
3-1.346 3-3s-1.346-3-3-3h-12.334l2.932-5.501c0.262-0.454 0.401-0.973 0.401-1.499 0-1.654-1.346-3-3-3-0.824 
0-1.592 0.327-2.163 0.922-0.007 0.008-0.015 0.015-0.022 0.023l-6.815 7.474v-1.419c0-0.552-0.448-1-1-1h-6c-0.552 
0-1 0.448-1 1v20c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-1.382l4.553 2.276c0.139 0.069 0.292 0.106 0.447 
0.106zM5 28c-0.552 0-1-0.448-1-1s0.448-1 1-1 1 0.448 1 1-0.448 1-1 1zM13.236 28l-5.236-2.618v-11.995l8.287-9.088c0.19-0.193 
0.443-0.299 0.713-0.299 0.551 0 1 0.449 1 1 0 0.171-0.041 0.332-0.122 0.479-0.010 0.017-0.020 0.033-0.029 
0.051l-3.732 7c-0.165 0.31-0.156 0.684 0.025 0.985s0.506 0.485 0.857 0.485h14c0.551 0 1 0.449 1 1s-0.449 1-1 
1h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 
1s-0.449 1-1 1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1c0.551 0 1 0.449 1 1s-0.449 1-1 1h-4.764z"></path>`,

pencil=
`<path d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 
18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>`;

//---------------------------------------------------------
let root= document.documentElement,			
$= document.querySelector.bind(document),
$$= document.querySelectorAll.bind(document),
width= Math.max(root.clientWidth||0,window.innerWidth||0),
height= Math.max(root.clientHeight||0,window.innerHeight||0);

let container= $("#container"),
fixedheight= (height/100)*90 + "px";
container.style.height= fixedheight;

//---------------------------------------------------------				
let
title= $("#title"),
input= $("#input"),
save= $("#save");
title.placeholder= "Title";
input.placeholder= "Type some text here :)";

if(localStorage.getItem("note")) input.value= localStorage.getItem("note");
if(localStorage.getItem("title")) title.value= localStorage.getItem("title");

save.onclick=function(){
let a= input.value.replace(/\n/g, "\r\n"),
b= new Blob([a], { type: "text/plain"}),
c= document.createElement("a");
if (title.value){
c.download= title.value + ".txt";
}
else{
let filename= input.value.split(" ").slice(0,4).join("-"); 
c.download= filename + ".txt";
}
c.href= window.URL.createObjectURL(b);
c.target="_blank";
c.style.display = "none";
document.body.appendChild(c);
c.click();
document.body.removeChild(c);
}

//---------------------------------------------------------
let
font= $(".font"),
fontbar= $("#font"),
slider= $("#slider"),
slidval= $(".size>span"),
bold= $("#bold"),
handlee= $("#handlee"),
arial= $("#arial"),
courier= $("#courier"),
open= false;

font.onclick= function (){
if(open){
fontbar.style.display= "none";
open= false;
}
else{
fontbar.style.display= "block";
open= true;
}};

slidval.innerHTML= slider.value;
slider.oninput= function(){
title.style.fontSize= slider.value + "px";
input.style.fontSize= slider.value + "px";
slidval.innerHTML= slider.value;				
};

function boldify(x){
title.style.fontWeight= x;	
input.style.fontWeight= x;
}

bold.onclick= function(){
if(!bold.checked) boldify("normal");
if(bold.checked) boldify("bold");
};

function change(v,w,x,y,z){
title.style.fontFamily= w;	
input.style.fontFamily= w;
title.style.fontWeight= v;	
input.style.fontWeight= v;
handlee.checked= x;
arial.checked= y;
courier.checked= z;				
}

handlee.onclick= function(){
if(!bold.checked) change("normal","Handlee",1,0,0);
if(bold.checked) change("bold","Handlee",1,0,0);
};

arial.onclick= function(){
if(!bold.checked) change("normal","Arial",0,1,0);
if(bold.checked) change("bold","Arial",0,1,0);
};

courier.onclick= function(){
if(!bold.checked) change("normal","Courier New",0,0,1);
if(bold.checked) change("bold","Courier New",0,0,1);
};

//---------------------------------------------------------
let shortcuts= $("#shortcuts"),
      options= $$(".options"),
        modal= $("#modal"),
        infos= $$(".modals"),
      blanket= $("#blanket"),
        shown= 0;
        
modal.innerHTML=`
<span id="close">X</span>
<b>The title bar has now been replaced with a toolbar, containing four textfields.
These textfields can be used as temporary clipboards</b>
<b><ul>
<li>Type or paste any text in the fields</li>
<li>Click on <span id='clip'></span> to lock the fields</li>
<li>When the fields are locked, click on them to insert/paste the text into the note area</li>		
<li>Click on <span id='pencil'></span> to edit the fields, when they're locked</li>
<li>Click on <span id='right'></span> to close the toolbar & return to the title bar</li>
</ul></b>
<span id='ps'>
This message will only be shown once, per visit.<br>
The "clipboards" are temporary; their data will be erased
when closing/refreshing this tab<br>
The title & note content are stored on local storage & will be available for future sessions		
</span>`;

options[0].innerHTML= pointleft;

options[0].onclick= function(){
shortcuts.style.display= "block";
if(!shown){
modal.style.display= "block";
blanket.style.display= "block";
}};

options[1].innerHTML= pointright;

options[1].onclick=()=> shortcuts.style.display= "none";

$("#close").onclick=()=>{
modal.style.display= "none";
blanket.style.display= "none";
shown=1
}

let svgS= '<svg width="15" height="15" viewBox="0 0 32 32">',
    svgE= '</svg>',
    svg1= $('#clip'),
    svg2= $('#pencil'),
    svg3= $('#right');
    
svg1.innerHTML= svgS + clip + svgE;
svg2.innerHTML= svgS + pencil + svgE;
svg3.innerHTML= svgS + pointright + svgE;

svg3.querySelector('path').style.fill="black";
svg2.querySelector('path').style.fill="black";
svg1.querySelectorAll('path').forEach(i=>i.style.fill="black")

//---------------------------------------------------------
let symbols= $$(".symbol"),
       edit= $(".edit"),
   editable= 0;

edit.innerHTML= clip;

edit.onclick= function(){
if(!editable){
symbols.forEach(i=> {
i.readOnly= true;
})
edit.innerHTML= pencil;
editable=1;
}
else{
symbols.forEach(i=> {i.readOnly= false;})
edit.innerHTML= clip;
editable=0;	
}};

symbols.forEach(i=>{  
i.onclick=()=> {
if(i.readOnly){
if (input.setRangeText){
input.setRangeText(i.value);
}
else{
input.focus()
document.execCommand('insertText', false, i.value);
}
}}
})

//---------------------------------------------------------
let obu= false;
window.onunload= window.onbeforeunload= function(){
if(!obu){
obu= true;
localStorage.removeItem("note");
localStorage.removeItem("title");
localStorage.setItem("note",input.value);
localStorage.setItem("title",title.value);
}};

//-------------------E-N-D---:-)------------------------------
