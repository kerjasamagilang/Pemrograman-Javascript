var username = prompt("Masukan USERNAME");
var password = prompt("Masukan PASSWORD");

if (username == "@gilangpurnama"){
    if(password == "gilangpurnama"){
        document.write("Selamat datang Gilang")
    } else {
        document.write("Password anda salah!");
    }
        } else {
            document.write("Anda tidak terdaftar!")
}