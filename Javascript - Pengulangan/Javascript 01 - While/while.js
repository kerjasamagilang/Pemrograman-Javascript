// Perulangan while merupakan yang termasuk dalam perulangan uncounted loop
// perulangan while juga bisa menjadi perulangan yang counted loop dengan memberikan counter di dalamnya

var hitung = confirm("Apakah anda mau mengulang?");
var counter = 0;

// while(hitung){
//     var jawab = confirm("Apakah anda mau mengulang?")
//         counter++;
//         if (jawab == false){
//             hitung = false;
//         }
// }

// document.write("Perulangan sudah dilakukan sebanyak- " + counter + " kali")


// Disederhanakan

while (hitung){
    counter++;
    hitung = confirm("Apakah anda mau mengulang? ")
}
document.write("Perulangan sudah dilakukan sebanyak- " + counter + " kali")

