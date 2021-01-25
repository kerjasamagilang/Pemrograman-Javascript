// Perulangan do/while sama seperti perulangan while.

// Perbedaanya:

// Perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu, 
// lalu mengecek kondisi yang ada di dalam kurung while.

var kondisi = confirm("Mau Lanjut?");
var hitung = 0;

//      do {
//          blok kode yang akan diulang
//      } while (kondisi);

do {
    hitung++;
    kondisi = confirm("Lanjut atau tidak?")
} while(kondisi){
    document.write("Perulangan sudah dilakukan sebanyak " + hitung + "kali")
}
