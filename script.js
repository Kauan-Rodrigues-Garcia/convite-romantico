/* Config: put your media files inside /assets with exact names:
   - assets/romantic.mp4 (or romantic.webm)
   - assets/music.mp3
   - assets/you.jpg
   - assets/her.jpg
*/

const buttonsArea = document.getElementById('buttonsArea');
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const musicToggle = document.getElementById('musicToggle');
const matchOverlay = document.getElementById('matchOverlay');
const picYou = document.getElementById('picYou');
const picHer = document.getElementById('picHer');
const bgMusic = document.getElementById('bgMusic');
const closeMatchBtn = document.getElementById('closeMatch');

const FALLBACK_YOU = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&auto=format&fit=crop';
const FALLBACK_HER = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop';

function placeNoButtonAtCenterLeft(){
  if(!buttonsArea || !noBtn) return;
  const rect = buttonsArea.getBoundingClientRect();
  const x = Math.round(rect.width * 0.16);
  const y = Math.round(rect.height * 0.5);
  noBtn.style.left = x + 'px';
  noBtn.style.top  = y + 'px';
  noBtn.style.transform = 'translate(-50%,-50%)';
}

function moveNoButtonRandom(){
  if(!buttonsArea || !noBtn) return;
  const areaRect = buttonsArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const maxX = Math.max(8, areaRect.width - btnRect.width - 8);
  const maxY = Math.max(8, areaRect.height - btnRect.height - 8);
  const newX = Math.floor(Math.random() * maxX) + 8;
  const newY = Math.floor(Math.random() * maxY) + 8;
  noBtn.style.left = newX + 'px';
  noBtn.style.top = newY + 'px';
  noBtn.style.transform = 'translate(0,0)';
}

['pointerenter','pointerdown','mouseover','touchstart'].forEach(evt=>{
  noBtn.addEventListener(evt, ()=>{
    moveNoButtonRandom();
  }, {passive:true});
});

window.addEventListener('resize', placeNoButtonAtCenterLeft);

musicToggle.addEventListener('click', async ()=>{
  try{
    if(bgMusic.paused){
      await bgMusic.play();
      musicToggle.textContent = '⏸️ Pausar música';
      musicToggle.setAttribute('aria-pressed','true');
    } else {
      bgMusic.pause();
      musicToggle.textContent = '🎵 Tocar música';
      musicToggle.setAttribute('aria-pressed','false');
    }
  }catch(e){
    alert('Permita interação com a página antes de tocar a música (alguns navegadores exigem isso).');
  }
});

function openMatch(){
  picYou.onerror = ()=>{ if(!picYou.src.includes('unsplash')) picYou.src = FALLBACK_YOU; };
  picHer.onerror = ()=>{ if(!picHer.src.includes('unsplash')) picHer.src = FALLBACK_HER; };

  matchOverlay.classList.add('open');
  matchOverlay.setAttribute('aria-hidden','false');

  requestAnimationFrame(()=>{
    picYou.classList.add('animate','left');
    picHer.classList.add('animate','right');
  });

  setTimeout(()=>{
    picYou.classList.add('bump');
    picHer.classList.add('bump');
  }, 820);

  setTimeout(()=>{
    matchOverlay.classList.add('showText');
  }, 1050);

  try{ bgMusic.currentTime = 0; bgMusic.play(); musicToggle.textContent = '⏸️ Pausar música'; }catch(e){}
}

function closeMatch(){
  matchOverlay.classList.remove('open','showText');
  matchOverlay.setAttribute('aria-hidden','true');
  picYou.classList.remove('animate','bump');
  picHer.classList.remove('animate','bump');
  setTimeout(()=>{
    picYou.classList.remove('left'); picYou.classList.add('left');
    picHer.classList.remove('right'); picHer.classList.add('right');
  },120);
}

yesBtn.addEventListener('click', openMatch);
closeMatchBtn.addEventListener('click', closeMatch);

document.addEventListener('DOMContentLoaded', ()=>{
  placeNoButtonAtCenterLeft();
});