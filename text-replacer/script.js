let $= document.querySelector.bind(document),
a= $('#input textarea'),
b= $('#one input'),
c= $('#two input'),
d= $('#output textarea'),
e= $('#replace'),
f= $('#copy'),
g= $('#string'),
h= $('#regex'),
i= /^\/(.*?)\/([gimuy]*)$/,
m= $('#submit');


e.onclick= function (){
let j= b.value.match(i);

if(h.checked){
if(j){
let k= new RegExp(j[1],j[2]);
d.value= a.value.replace(k, c.value);
}
else{
let l= new RegExp(b.value);
d.value= a.value.replace(l, c.value);
}
}
if(g.checked) d.value= a.value.split(b.value).join(c.value);
};


f.onclick = function() {
if (!navigator.clipboard){
d.select();
document.execCommand('copy');
alert('Copied!');
}
else{
navigator.clipboard.writeText(d.value);
alert('Copied!!');
}
};


m.onclick= function(){
a.value= d.value;
alert('Output inserted as input!');
};
