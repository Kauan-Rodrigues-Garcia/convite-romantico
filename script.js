document.getElementById("yes-btn").addEventListener("click", () => {
  document.getElementById("main-content").style.display = "none";
  const matchScreen = document.getElementById("match-screen");
  matchScreen.classList.add("show");

  const music = document.getElementById("bg-music");
  music.play();
});

document.getElementById("no-btn").addEventListener("click", () => {
  alert("Ahhh, quem sabe na próxima 😢");
});
