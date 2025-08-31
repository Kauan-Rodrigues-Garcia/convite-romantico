// efeito de digitação
const text = "Você quer sair comigo?";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// botão 'não' que foge
const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// ação botão 'sim'
document.getElementById("yes-btn").addEventListener("click", () => {
  alert("Oba! 💖 Mal posso esperar!");
});