var pertanyaan = prompt("Apakah Bekasi ibu kota Indonesia?");
var jawaban = (pertanyaan.toUpperCase() == "SALAH") ? "Benar": "Salah";
document.write(`Jawaban anda: ${jawaban}`);