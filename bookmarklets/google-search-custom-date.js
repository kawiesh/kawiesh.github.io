let c= new Date(),
d= c.getFullYear(),
e= c.getMonth()+1,
f= c.getDate(),
g= e+'/'+f+'/'+d,
h= prompt('Enter start date (Month/Day/Year)','01/01/2000'),
i= prompt('Enter end date (Month/Day/Year)',g),
j= '&tbs=cdr:1,cd_min:'+h+',cd_max:'+i,

if (!location.hostname.includes('google')){
let b= prompt("Enter Keywords to google");
location= 'https://google.com/search?q='+b+j;
}
else {
let b= document.forms[0].elements['q'].value,
k= location.protocol+'//';
location= k+location.hostname+'search?q='+b+j;
}
