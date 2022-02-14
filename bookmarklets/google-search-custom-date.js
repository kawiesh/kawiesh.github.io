let a= location.hostname+'/search?q=';
if (!a.includes('www.google')) alert ('Not on Google');
else {
b= document.forms[0].elements['q'].value,
c= new Date(),
d= c.getFullYear(),
e= c.getMonth()+1,
f= c.getDate(),
g= e+'/'+f+'/'+d,
h= prompt('Enter start date (Month/Day/Year)','01/01/2000'),
i= prompt('Enter end date (Month/Day/Year)',g),
j= '&tbs=cdr:1,cd_min:'+h+',cd_max:'+i,
k= location.protocol+'//';
 
location= k+a+b+j;
}
