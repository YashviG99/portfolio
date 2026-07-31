// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});

// ===============================
// Reveal Animation
// ===============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll(".card,.skill,.project,.education,.contact div")
.forEach(el=>observer.observe(el));

// ===============================
// Typing Effect
// ===============================

const text="Java Full Stack Developer";

let i=0;

const title=document.querySelector(".hero-left h2");

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

// ===============================
// Active Menu
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Scroll Progress Bar
// ===============================

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.background="#8b5cf6";

progress.style.zIndex="99999";

progress.style.width="0%";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-window.innerHeight;

const percent=

(window.pageYOffset/total)*100;

progress.style.width=percent+"%";

});

// ===============================
// Button Ripple
// ===============================

document.querySelectorAll(".btn,.btn2").forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const rect=btn.getBoundingClientRect();

btn.style.setProperty("--x",

e.clientX-rect.left+"px");

btn.style.setProperty("--y",

e.clientY-rect.top+"px");

});

});

// ===============================
// Fade In
// ===============================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// ===============================
// Console Message
// ===============================

console.log("%cWelcome Recruiter 👋",

"font-size:24px;color:#8b5cf6;font-weight:bold;");

console.log("%cPortfolio by Yashvi Gheewala",

"font-size:18px;color:#06b6d4;");