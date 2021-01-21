var nomor = prompt("Masukan nomor hadiah 1 -> 10 untuk mendapatkan hadiah, \nSemoga beruntung");
var hadiah = "";

switch(nomor){
    case "1":
        hadiah = "SEPATU";
        break;
   
    case "3":
        hadiah = "BAJU";
        break;

    case "5":
        hadiah = "TOPI";
        break;
    case "7":
        hadiah = "CELANA";
        break;

    case "9":
        hadiah = "SENDAL";
    
        default:
            document.write("Oops, Kamu kurang beruntung");
}
    if (hadiah === ""){
        document.write("<p>Kamu tidak mendapatkan hadiah</p>")
    } else {
        document.write("Selamat kamu mendapatkan hadiah " + hadiah + " Baru");
    }