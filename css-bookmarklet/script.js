let a= document.querySelector('pre'),
    b= document.querySelector('#prev'),
    c= 'javascript:'+encodeURIComponent(`(function(){${a.textContent}})();`),
    d= document.querySelector('#copy');
b.onclick= function(){
location.href= c;
return false;};

d.addEventListener('copy',
function(e){
e.clipboardData.setData('text', c);
e.preventDefault();
});

d.onclick=function(){
try{ navigator.clipboard.writeText(c);
alert('Copied!');
}
catch(err){
    try{let inp =document.createElement('input');
        document.body.appendChild(inp)
        inp.value= c; inp.select();
        document.execCommand('copy',false);
        inp.remove();
        alert('Copied!!');}
    catch(err){
        try{let e= window.getSelection(),
            f= document.createRange();
            f.selectNodeContents(d);
            e.removeAllRanges();
            e.addRange(f);
            document.execCommand("copy");
            alert('Copied!!!');}
         catch(err){alert("Couldn't copy because: "+ err.message)}
     }
}
};   



  
