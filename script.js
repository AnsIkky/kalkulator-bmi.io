// Memanggil DOM
const bmiRes = document.getElementById("bmiResult");
const bHeight = document.getElementById("bHeight");
const bWeight = document.getElementById("bWeight");
const calcBtn = document.getElementById("calcBtn");
const resBtn = document.getElementById("resBtn");

// Menjumlahkan total BMI jika tombol "Hitung BMI ditekan"
calcBtn.addEventListener("click", function(e) {
  bmiRes.innerHTML = (bWeight.value / (Math.pow((bHeight.value / 100), 2))).toFixed(2);
  e.preventDefault();
})

resBtn.addEventListener("click", function() {
  bmiRes.innerHTML = "0.0";
})