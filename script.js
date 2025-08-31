const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const matchOverlay = document.getElementById('match');
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-music');

// Botão "Não" foge
noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Botão "Sim" ativa o match
yesBtn.addEventListener('click', () => {
  matchOverlay.classList.add('active');
});

// Botão música
playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸️ Pausar";
  } else {
    music.pause();
    playBtn.textContent = "🎵 Música";
  }
});