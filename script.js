// confetti
function randomColor() {
  const colors = ["#ff0", "#f0f", "#0ff", "#f00", "#0f0", "#00f"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.backgroundColor = randomColor();
  confetti.style.animationDuration = Math.random() * 2 + 2 + "s"; // antara 2-4 detik
  document.getElementById("confetti-container").appendChild(confetti);

  // Hapus confetti setelah selesai animasi
  setTimeout(() => {
    confetti.remove();
  }, 4000);
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    setTimeout(createConfetti, i * 30);
  }
}

// Slider gambar memori
const sliderImgs = ["gambar/old.jpg", "gambar/rawrr.jpg", "gambar/cumi.jpg"];
let sliderIdx = 0;
function showSliderImg() {
  document.getElementById("sliderImage").src = sliderImgs[sliderIdx];
}
function prevImg() {
  sliderIdx = (sliderIdx - 1 + sliderImgs.length) % sliderImgs.length;
  showSliderImg();
}
function nextImg() {
  sliderIdx = (sliderIdx + 1) % sliderImgs.length;
  showSliderImg();
}

// Kotak pertanyaan interaktif
function showAnswer(ans) {
  let msg = "";
  if (ans === "Y") msg = "yeayy, aku ikut seneng jugaa";
  else
    msg =
      "semoga hujannya cepet reda dan pelangi menghampirimu, princess hujan :)";
  document.getElementById("answerResult").innerText = msg;
}
// amplop
const bukaSurat = document.getElementById("bukaSurat");
const popupSurat = document.getElementById("popupSurat");
const tutupSurat = document.getElementById("tutupSurat");

bukaSurat.addEventListener("click", () => {
  popupSurat.style.display = "block";
});

tutupSurat.addEventListener("click", () => {
  popupSurat.style.display = "none";
});

// Optional: klik di luar popup untuk menutup
window.addEventListener("click", (e) => {
  if (e.target === popupSurat) {
    popupSurat.style.display = "none";
  }
});

// Autoplay music di beberapa browser harus interaksi user
window.addEventListener("load", function () {
  const music = document.getElementById("bgMusic");
  music.volume = 0.25;
  // Untuk autoplay, coba play paksa (di beberapa browser tetap perlu interaksi user)
  music.play().catch(() => {});
});
