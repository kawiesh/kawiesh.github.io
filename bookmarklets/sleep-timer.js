let a= prompt("Close tab after how many minutes?");
let b= document.querySelector("html");
if(a){
let c= window.open(location.href);
let d= a*60*1000;
let e= d;
doit(e,b,d);

setTimeout(()=>{
c.close();
b.innerHTML= `>><b>New tab opened.<br>
>>!</b>`;
},d);
}


function formatTime(x){
let hms= new Date(x).toISOString().substr(11,8).split(":");
let h= Number(hms[0]), m= Number(hms[1]), s= Number(hms[2]);
let H,M;

switch(h){
case 0: H= ""; break;
case 1: H= "1 hour, "; break;
default:H= `${h} hours, `;
}

switch(m){
case 0: M= ""; break;
case 1: M= "1 min. & "; break;
default:M= `${m} min. & `;
}


return `${H}${M}${s} sec.`;

}




function doit(x,y,z){
document.title= "Sleep Timer";
if(x>1000){

y.innerHTML= `>><b>New tab opened.<br>
>>It'll close after ${formatTime(x)}`;
x= x-1000;
setTimeout(()=>{
doit(x,y,z)
},1000);

}
else y.innerHTML= `>><b>New tab opened.<br>
>>Closed after ${formatTime(z)}`;
}
