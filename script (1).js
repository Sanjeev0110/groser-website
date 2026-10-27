(function(){
var root=document.documentElement,intro=document.getElementById('intro'),g=document.getElementById('greet'),me=document.getElementById('me');
var m=document.getElementById('mail');
m.addEventListener('click',function(){try{navigator.clipboard.writeText('sanjeevkulkarni9899@gmail.com').then(function(){m.textContent='Email copied ✓';setTimeout(function(){m.textContent='Email me'},2200)})}catch(e){}});
document.getElementById('theme').onclick=function(){var d=getComputedStyle(root).getPropertyValue('--bg').trim()==='#121214';root.setAttribute('data-theme',d?'light':'dark')};
var words=['Hello','ನಮಸ್ಕಾರ','नमस्ते','Hola','Bonjour','こんにちは','Ciao','안녕하세요','Olá','Hallo','مرحبا','Привет'];
var timers=[],done=false;
function finish(){if(done)return;done=true;timers.forEach(clearTimeout);intro.classList.add('out');try{sessionStorage.setItem('seen','1')}catch(e){}setTimeout(function(){intro.style.display='none'},900)}
var seen=false;try{seen=sessionStorage.getItem('seen')==='1'}catch(e){}
if(seen||matchMedia('(prefers-reduced-motion:reduce)').matches){intro.style.display='none';done=true}
else{
words.forEach(function(w,i){timers.push(setTimeout(function(){g.textContent=w},i*230))});
timers.push(setTimeout(function(){g.style.display='none';me.style.display='flex'},words.length*230+100));
timers.push(setTimeout(finish,words.length*230+1300));
document.getElementById('skip').onclick=finish;
}
})();
