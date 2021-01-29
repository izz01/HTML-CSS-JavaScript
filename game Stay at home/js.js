const tanah = document.querySelectorAll('.tanah');
const jaiz = document.querySelectorAll('.jaiz');
const aman = document.querySelectorAll('.aman');
const anggia = document.querySelectorAll('.anggia');
const arul = document.querySelectorAll('.arul');
const bella = document.querySelectorAll('.bella');
const dea = document.querySelectorAll('.dea');
const dwi = document.querySelectorAll('.dwi');
const ita = document.querySelectorAll('.ita');
const rakel = document.querySelectorAll('.rakel');
const rifki = document.querySelectorAll('.rifki');
const yudha = document.querySelectorAll('.yudha');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let gmbar = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam','tujuh', 'dlpan', 'sem', 'sep', 'seb'];
let tanahSebelumnya;
let selesai;
let skor;
let gambarS;

function randomTanah(tanah){
  const t = Math.floor(Math.random() * tanah.length);
  const tRandom = tanah[t];
  if (tRandom == tanahSebelumnya){
    randomTanah(tanah);
  }
  tanahSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function gKeluarR (gmbar) {
  const t = Math.floor(Math.random() * gmbar.length);
  return keluar = gmbar[t];
}
function munculkanGmbar() {
  const tRandom = randomTanah(tanah);
  const wRandom = randomWaktu(300, 1000);
  const gR = gKeluarR(gmbar);
  tRandom.classList.add(gR);
  
  setTimeout(() => {
    tRandom.classList.remove(gR);
    if (!selesai) {
      munculkanGmbar();
    return gR;
    }
  }, wRandom);
}
function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanGmbar();
  setTimeout(() => {
    selesai = true;
  }, 23000);
}
function pukul() {
  skor++;
  this.parentNode.classList.remove(gmbar);
  pop.play();
  papanSkor.textContent = skor;
}
yudha.forEach(t => {
  t.addEventListener('click', pukul);
});
jaiz.forEach(t => {
  t.addEventListener('click', pukul);
});
aman.forEach(t => {
  t.addEventListener('click', pukul);
});
anggia.forEach(t => {
  t.addEventListener('click', pukul);
});
arul.forEach(t => {
  t.addEventListener('click', pukul);
});
bella.forEach(t => {
  t.addEventListener('click', pukul);
});
dea.forEach(t => {
  t.addEventListener('click', pukul);
});
dwi.forEach(t => {
  t.addEventListener('click', pukul);
});
ita.forEach(t => {
  t.addEventListener('click', pukul);
});
rakel.forEach(t => {
  t.addEventListener('click', pukul);
});
rifki.forEach(t => {
  t.addEventListener('click', pukul);
});