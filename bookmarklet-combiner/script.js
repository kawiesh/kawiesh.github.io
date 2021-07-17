let a=document.querySelector('#titles textarea'),b=document.querySelector('#urls textarea'),c=document.querySelector('#result textarea'),d=document.querySelector('#encode'),e=document.querySelector('#kopy');let aPH=`Paste a list of your Titles here,
separated by linebreaks. Example:
Title 1
Title 2
Title 3`;a.placeholder=aPH;a.onfocus=function(){a.placeholder='';}
a.onblur=function(){a.placeholder=aPH;};let bPH=`Paste a list of your URLs here,
separated by linebreaks. Example:
URL 1
URL 2
URL 3`;b.placeholder=bPH;b.onfocus=function(){b.placeholder='';}
b.onblur=function(){b.placeholder=bPH;}
let er1='*ERROR*',er2=`Oops! Your input contains some potential errors:
• Input contains extra linebreak(s)
• Number of Titles ≠ number of URLs
• Not every entry is properly separated by a linebreak

--These cases have been ignored--`;er3=`Oops! Your input contains backticks \`
This can cause problems, and
has therefore been escaped by \\\``,er4=`Oops! Input list(s) empty!`;let bt=false;function kd(x,y,z){c.textContent='';if((a.value&&b.value)==(0||''))alert(er4);else{let a1=a.value.split('\n'),b1=b.value.split('\n'),merged=[];for(let i=0;i<a1.length;i++){if(a1[i]=='')a1[i]=er1;if(b1[i]=='')b1[i]=er1;if(b1[i]==0)b1[i]=er1;if(b1[i]==undefined)b1[i]=er1;if(a1[i].includes('`')){bt=true;a1[i]=a1[i].replace(/`/g,'\\`');}
if(b1[i].includes('`')){bt=true;b1[i]=b1[i].replace(/`/g,'\`');}
merged.push(`${x+a1[i]+y+b1[i]+z}`);let result=document.createTextNode(merged[i]+'\n');c.appendChild(result);}
if(c.textContent.includes('*ERROR*')){alert(er2);c.textContent=c.textContent.split('\n').filter(function(line){return line.indexOf('*ERROR*')==-1;}).join('\n');}
c.textContent=`(function(){ 
let width= '140px';
                           
let b=[${c.textContent}];

let b1= [], b2= [];
for (let i=0; i<b.length; i++) {
if (b[i].includes('>>>')){
let split = b[i].split('>>>');
b1.push(split[0]);
b2.push(split[1]);
}
} 

let a= document.createElement('div');
a.id= 'bmlist';
document.body.appendChild(a); 

let menu = document.createElement('span');
menu.innerHTML = '❌';
a.appendChild(menu); 

function kd (x,y) {
let link = document.createElement('a');
link.href= x;
link.textContent= y;
link.target= '_blank';
a.appendChild(link);
} 

for(let i=0; i<b1.length; i++){
kd(b2[i],b1[i]);
} 
                              
let c= document.querySelector('#bmlist');
    c.style.top= '10px'; 
    c.style.left= '10px';
    c.style.width= width;
    c.style.textAlign= 'left'; 
    c.style.position= 'fixed';
    c.style.zIndex= '10123456'; 
    c.style.boxSizing= 'border-box';
    c.style.visibility= 'visible'; 

let d= document.querySelector('#bmlist span');
    d.style.textAlign= 'center';
    d.style.border= '1px solid red';
                              
let e= document.querySelectorAll('#bmlist a');  
for (let i=0; i<e.length; i++){
    e[i].style.display= 'inline-block';
    e[i].style.border= '1px solid fuchsia';
    e[i].style.boxSizing= 'border-box';
    e[i].style.padding= '4px 0 4px 10px';
    e[i].style.background= 'black'; 
    e[i].style.color= 'white';
    e[i].style.width= '100%'; 
    e[i].style.font= '14px arial';
    e[i].style.textDecoration= 'none';
} 

d.onclick= function(){
for(let i=0; i<e.length; i++){
if (e[i].style.display==('none'))
e[i].style.display= 'inline-block';
else e[i].style.display= 'none'; 
}
};
})();`;return false;}}
let X='`',Y='>>>',Z='`,';function KD(){kd(X,Y,Z);if(bt==true)alert(er3);if(c.textContent.includes(er1))alert(er2);return false;}
let prev=document.querySelector('#warning a'),newklik=true;prev.onclick=function(){if(c.textContent!=0){if(newklik===true){location='javascript:'+encodeURIComponent(c.textContent);newklik=false;}
else{let bmx=document.querySelector('#bmlist');bmx.parentNode.removeChild(bmx);newklik=true;}}
else alert('Nothing generated');};e.onclick=function(){if(c.textContent!=0){let encoded=encodeURIComponent(c.textContent);d.value='javascript:'+encoded;d.select();document.execCommand("copy");alert('Copied to clipboard!');}
else alert('Nothing to copy');return false;};