// script.js
let audio = null;

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio = new Audio(`sounds/${btn.dataset.sound}.mp3`);
    audio.play();
  });
});

document.querySelector(".stop").addEventListener("click", () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
});
