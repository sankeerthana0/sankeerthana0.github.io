const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add('in')}),{threshold:.08});
document.querySelectorAll('.project-card,.cert,.timeline article,.writing-cards>a').forEach(el=>observer.observe(el));
