// Membuat variable array seperti berikut
var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

// Kemudian kita tampilkan semua hari
// dengan menggunakan method foreach
hari.forEach(function(hari){
    document.write("<p>" + hari + "</p>");
});

hari.forEach((hari) => { // Menggunakan => tanpa kata function
    document.write("<p>" + hari + "</p>");
});