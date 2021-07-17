let width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

let height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;

let x= document.querySelector('.bmcode');
if(width>height){
x.style.height='40%';
x.style.width='60%';
x.style.left='20%';
}
if(width<height){
x.style.height='50%';
x.style.width='80%';
x.style.left='10%';
}

let a= document.querySelector('#bmbuttonrun');
let b= document.querySelector('#bmbuttonclear');
let c= document.querySelector('#bmcode');
let d= document.querySelector('#bmbuttoncopy');

let cvalue = localStorage.getItem('cvalue');
c.value= cvalue;

a.onclick= function(){
let code=`try{
${c.value}
}
catch(x){
alert(x);
}`;

eval(code);
};

b.onclick=function(){
c.value='';
};

d.onclick=function(){
let par='javascript:'+ encodeURIComponent(`(function(){${c.value}})();`) ;
navigator.clipboard.writeText(par);
alert('copied');
};

d.style.left= (c.offsetWidth - d.offsetWidth)/2+'px';


let obu = false;
window.onunload = window.onbeforeunload= function(){
if(!obu){ obu= true;
localStorage.removeItem('cvalue');
localStorage.setItem('cvalue',c.value);
}
};
