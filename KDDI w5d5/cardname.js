const namaLengkap = "Muhammad Yazid HAsyhidan";
const asalTempat = "Kota Bekasi";
let umur = 22;
let statusPengerjaan = false;
let skorProgres = 0;
let skorAkhir = skorProgres + 80 + 90 + 85;
let dataDariServer = null;
let belumDiberiNilai;
let materiDipelajari = ["HTML", "CSS", "JavaScript"];
const profilSantri = {
  namaLengkap,
  asalTempat,
  umur,
  materiDipelajari,
};

let tahunMasuk = "2020";
console.log("\n--- Studi Kasus: Penjumlahan String vs Number ---");

console.log("tahunMasuk + 2 =", tahunMasuk + 2); // hasil: "20202" (concatenation)

// Perbaikan: konversi ke Number sebelum operasi
let tahunMasukNumber = Number(tahunMasuk);
console.log("Number(tahunMasuk) + 2 =", tahunMasukNumber + 2); // hasil: 2022

console.log("--- Tipe Data ---");
console.log("namaLengkap :", typeof namaLengkap);
console.log("asalTempat :", typeof asalTempat);
console.log("umur :", typeof umur);
console.log("statusPengerjaan :", typeof statusPengerjaan);
console.log("skorProgres :", typeof skorProgres);
console.log("dataDariServer :", typeof dataDariServer);
console.log("belumDiberiNilai :", typeof belumDiberiNilai);
console.log("materiDipelajari :", typeof materiDipelajari);
console.log("profilSantri :", typeof profilSantri);

console.log("\n--- Ringkasan ---");
console.log("Skor progres akhir:", skorAkhir);
console.log("Profil lengkap:", profilSantri);
