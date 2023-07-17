// Memanggil DOM bagian input dan tombol(button)
const bmiRes = document.getElementById("bmiResult");
const bHeight = document.getElementById("bHeight");
const bWeight = document.getElementById("bWeight");
const calcBtn = document.getElementById("calcBtn");
const resBtn = document.getElementById("resBtn");


// Memanggil DOM bagian kalkulasi hasil dan info hasil
const resH3 = document.getElementById("resH3");
const resH4 = document.querySelector(".resultDataText h4");
const resImg = document.querySelector(".resultData .resImg");
const infoH3 = document.querySelector(".resultInfo h3");
const infoPara = document.querySelectorAll(".resultInfo p");


// Menjumlahkan total BMI jika tombol "Hitung BMI ditekan"
calcBtn.addEventListener("click", function(e) {
  bmiRes.innerHTML = (bWeight.value / (Math.pow((bHeight.value / 100), 2))).toFixed(2);
  e.preventDefault();
  return bmiCalculation();
})

// Membuat tombol Reset
resBtn.addEventListener("click", function() {
  bmiRes.innerHTML = "0.0";
  resH3.innerHTML = "Disini akan ditampilkan index BMI anda";
  resH4.innerHTML = "Berapakah index BMI anda?"
  resImg.innerHTML = `<img src="assets/img/normal/06.png" alt="hasil_bmi">`;
  bmiRes.style.backgroundColor = `#c2bab0`;
  infoH3.innerHTML = " ";
  infoPara[0].innerHTML = " ";
  infoPara[1].innerHTML = " ";
  infoPara[2].innerHTML = " ";
})








// Fungsi-fungi pemanggilan DOM
function bmiCalculation () {
  // membuat nomor acak untuk url gambar random
  const randomNum = Math.floor((Math.random() * 5) + 1);


  // membuat pernyataan hasil BMI menggunakan if, if else dan else
  if(bmiRes.innerHTML < 18.5) {
    resH3.innerHTML = "berat badan Kurang";
    resH4.innerHTML = "Anda kekurangan berat badan"
    resImg.innerHTML = `<img src="assets/img/sad/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#cf2222`;
  }
  else if(bmiRes.innerHTML >= 18.5 && bmiRes.innerHTML <= 24.99) {
    resH3.innerHTML = "Berat badan Normal";
    resH4.innerHTML = "Anda memiliki berat badan ideal"
    resImg.innerHTML = `<img src="assets/img/happy/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#22cf48`;
  }
  else if(bmiRes.innerHTML >= 25.0 && bmiRes.innerHTML <= 29.9) {
    resH3.innerHTML = "Berat bada Lebih";
    resH4.innerHTML = "Anda memiliki berat badan berlebih";
    resImg.innerHTML = `<img src="assets/img/normal/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#cfcf22`;
    infoH3.innerHTML = 'Hasil BMI diantara 23 dan 29';
    infoPara[0].innerHTML = 'Anda berada dalam kategori overweight atau berat badan berlebih.';
    infoPara[1].innerHTML = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';
    infoPara[2].innerHTML = 'Jika BMI anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.'
  }
  else if (bmiRes.innerHTML >= 30.0 && bmiRes.innerHTML < Infinity) {
    resH3.innerHTML = "Kegemukan";
    resH4.innerHTML = "Anda mengalami obesitas";
    resImg.innerHTML = `<img src="assets/img/sad/0${randomNum}.png" alt="hasil_bmi">`;
    bmiRes.style.backgroundColor = `#cf2222`;
  }
  else if(bmiRes.innerHTML == Infinity) {
    resH3.innerHTML = "Ada data yang tidak di isi";
    resH4.innerHTML = "Tolong isi data yang kosong untuk menampilkan hasil";
    bmiRes.style.backgroundColor = '#d851b7';
  }
  else {
    resH3.innerHTML = "Tolong isi data berat badan anda";
    resH4.innerHTML = "Jika kosong tidak akan menampilkan hasil";
    bmiRes.style.backgroundColor = '#51d8d2';
  }
}