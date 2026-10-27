/* Groser Private Limited - website script
   Part 1: intro animation (greetings, logo flying into the header)
   Part 2: WhatsApp links, footer year, scroll reveal, counter and progress bar
   Loaded with <script src="script.js" defer></script> */

/* ---------- Part 1: intro animation ---------- */
(function(){
var b=document.body,intro=document.getElementById('intro'),g=document.getElementById('greet'),me=document.getElementById('me'),mi=document.getElementById('meimg');
document.addEventListener('DOMContentLoaded',function(){var n=document.querySelector('nav img');if(n)mi.src=n.src});
var words=['Hello','ನಮಸ್ಕಾರ','नमस्ते'];
var timers=[],done=false;
function go(){b.classList.remove('pre')}
function end(){b.classList.remove('hl');intro.style.display='none'}
function finish(fly){
if(done)return;done=true;timers.forEach(clearTimeout);
try{sessionStorage.setItem('seen','1')}catch(e){}
var n=document.querySelector('nav img');intro.classList.add('out');go();
if(fly===true&&me.style.display==='flex'&&n){
var r=n.getBoundingClientRect(),s=mi.getBoundingClientRect();
me.classList.add('fly');
mi.style.transform='translate('+(r.left-s.left)+'px,'+(r.top-s.top)+'px) scale('+(r.height/s.height)+')';
setTimeout(end,950)}else{setTimeout(end,700)}}
var seen=false;try{seen=sessionStorage.getItem('seen')==='1'}catch(e){}
if(seen||matchMedia('(prefers-reduced-motion:reduce)').matches){intro.style.display='none';done=true;go();b.classList.remove('hl')}
else{
words.forEach(function(w,i){timers.push(setTimeout(function(){g.textContent=w},i*230))});
timers.push(setTimeout(function(){g.style.display='none';me.style.display='flex'},words.length*230+100));
timers.push(setTimeout(function(){finish(true)},words.length*230+1200));
document.getElementById('skip').onclick=function(){finish(false)};
}
})();

/* ---------- Part 2: main page behaviour ---------- */
var WHATSAPP_NUMBER="918884381138";
var url="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Hello Groser! I would like to order kirana items. My list:\n");
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=url;a.target="_blank";a.rel="noopener"});
document.getElementById("yr").textContent=new Date().getFullYear();
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;if(document.body.classList.contains("pre")){setTimeout(function(){cio.unobserve(e.target);cio.observe(e.target)},400);return}var el=e.target,to=+el.dataset.n,c=0,st=Math.max(1,Math.ceil(to/70));var t=setInterval(function(){c=Math.min(to,c+st);el.textContent=c.toLocaleString("en-IN")+(el.dataset.s||"");if(c>=to)clearInterval(t)},25);cio.unobserve(el)})},{threshold:.4});
document.querySelectorAll("[data-n]").forEach(function(el){cio.observe(el)});
window.addEventListener("scroll",function(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;document.getElementById("bar").style.width=(m>0?h.scrollTop/m*100:0)+"%"},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el,i){el.style.transitionDelay=(i%3)*0.1+"s";io.observe(el)});
