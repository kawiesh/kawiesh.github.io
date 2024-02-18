function modIt(){
let about= select(".about");
let suriname= select("#sr");
let india= select("#in");
let prefix= "https://kawiesh.eu.org/radio/";

if(about) about.onclick=()=> window.open(prefix+"about");
if(suriname) suriname.onclick=()=> location.href= prefix;
if(india) india.onclick=()=> location.href= prefix+"bollywood";
}


modIt();
