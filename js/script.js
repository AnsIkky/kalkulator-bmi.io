// Memanggil DOM
const bmiRes = document.getElementById("bmiResult");
const bHeight = document.getElementById("bHeight");
const bWeight = document.getElementById("bWeight");
const calcBtn = document.getElementById("calcBtn");
const resBtn = document.getElementById("resBtn");
const resH3 = document.getElementById("resH3");

// Menjumlahkan total BMI jika tombol "Hitung BMI ditekan"
calcBtn.addEventListener("click", function(e) {
  bmiRes.innerHTML = (bWeight.value / (Math.pow((bHeight.value / 100), 2))).toFixed(2);
  e.preventDefault();
  if(bmiRes.innerHTML < 18.5) {
    resH3.innerHTML = "Kekurangan berat badan";
  }
  else if(bmiRes.innerHTML >= 18.5 && bmiRes.innerHTML <= 24.99) {
    resH3.innerHTML = "Berat badan Ideal";
  }
  else if(bmiRes.innerHTML >= 25.0 && bmiRes.innerHTML <= 29.9) {
    resH3.innerHTML = "Kelebihan berat badan";
  }
  else {
    resH3.innerHTML = "Kegemukan (Obesitas)";
  }
})

resBtn.addEventListener("click", function() {
  bmiRes.innerHTML = "0.0";
})