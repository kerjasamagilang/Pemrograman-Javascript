// TANPA KURUNG KURAWAL
var nilaiAkhir = prompt("Masukan nilai akhir untuk dicek: ");
var grade = "";

// if (nilaiAkhir >= 90) grade = "A";
// else if (nilaiAkhir >= 80) grade = "B";
// else if (nilaiAkhir >= 70) grade = "C";
// else if (nilaiAkhir >= 60) grade = "D";
// else if (nilaiAkhir >= 50) grade = "E";
// else if (nilaiAkhir >= 40) grade = "F";
// else grade = "Belum Lulus";
// document.write(`<p>Grade anda: ${grade}</p>`)


// MENGGUNAKAN KURUNG KURAWAL
if (nilaiAkhir > 100){
    grade = "Maaf, nilai tidak ditemukan"
}else if (nilaiAkhir >= 90){
    grade = "A"
} else if (nilaiAkhir >= 80){
    grade = "B"
} else if (nilaiAkhir >= 70){
    grade = "C"
} else if (nilaiAkhir >= 60){
    grade = "D"
} else if (nilaiAkhir >= 50){
    grade = "E"
} else if (nilaiAkhir >= 40){
    grade = "F"
} else { 
    grade = "Belum lulus";
}
document.write(`<p>Grade anda: ${grade}</p>`);

