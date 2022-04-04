// JavaScript Document
// JavaScript Document
/*
JavaScript document
document,write,getElementById,querySelector
for,var,let,const,add,style,
eventListener,classList,parentElement
children,nextElementSibling
previousElementSibling
querySelectorAll,getElementsByTagName
createElement,createTextNode,appendChild
removeChild,insertBefore,function
innerHTML,Math,sqrt,pow,random,floor,ceil
max,date new Date(),object,array,
date.get FullYear,Month,Hours,Minutes
Day,constractor,pop,push,shift,unshift
splice,slice,sort,href,protocol,hostname,port,pathname,break,continue,while,do
if,else if,else,switch,case,default,
Number,parseInt,parseFloat,toString()
toFixed,toPrecision,length,charAt,
toUpperCase,concat,addEventListener
background,color,textAlign,style,mouseover,mouseout
click,textContent,window,location,alert,setInterval,setTimeout
attribute*/


var showMenu = document.querySelector(".container");
var openBar =document.querySelector("#openBar");
var closeBar =document.querySelector("#closeBar");


var count =0;

function openMenu(){
   // menu
   
   
   
   // 
   count++;
   if(count == 1){
      showMenu.style.display="block";
      openBar.style.display="none";
      closeBar.style.display="block";
      var hr =document.querySelector("hr");
      hr.style.display="block";
      openBar.classList.add("rotate1");
      
   }
   else{
      count=0;
      showMenu.style.display="none";
      openBar.style.display="block";
      closeBar.style.display="none";
      var hr =document.querySelector("hr");
      hr.style.display="none";
      
   }
}









