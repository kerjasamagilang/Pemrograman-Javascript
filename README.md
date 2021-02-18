## Cara menulis kode Javascript

    Penulisan Kode Javascript dibagi menjadi 3 cara:

        •   Penulisan dengan cara Embed
            Penulisan dengan cara ini dilakukan di dalam tag <script>
            Tag ini dapat ditulis di dalam tag <head> dan <body>

        •   Penulisan dengan cara inline
            Penulisan ini dilakukan di dalam atribut HTML
            cara ini biasanya digunakan untuk memanggil suatu fungsi pada event tertentu
            Contoh: <a href="#" onclick="alert('Yey!')">Klik aku!</a>
            
        •   Penulisan Kode Javascript secara Eksternal
            Penulisan ini memiliki file javascript terpisah
            Cara ini biasanya digunakan pada proyek-proyek besar,
            karena diyakini—dengan cara ini—dapat lebih mudah mengelola kode project
            Kita menyisipkannya dengan memberikan atribut src pada tag <script>
            untuk memanggil file javascript
            <script src="Pemgrograman-Javascript.js"></script>

## Menampilkan Output pada Javascript
    
    Output adalah sebuah tampilan program yang biasanya digunakan untuk memperlihatkan hasil akhir

        Ada 4 cara menampilkan output pada Javascript:

        •   Menggunakan Fungsi console.log();
        •   Menggunakan Fungsi alert();
        •   Menggunakan Fungsi document.write();
        •   Menggunakan innerHTML.

            1.  Fungsi console.log() adalah fungsi untuk menampilkan teks ke console Javascript
                console.log("Hello World!");
                Fungsi console.log() biasanya digunakan untuk debugging
                Karena setiap pesan error di Javascript selalu ditampilkan di dalam Console.

            2.  Fungsi alert() adalah fungsi untuk menampilkan jendela dialog
                Fungsi sebenarnya berada pada objek window
                window.alert("Hello World!");
                alert("Hello World!");
                Fungsi alert(), hanya bisa digunakan di dalam browser saja
                Sedangkan pada Nodejs fungsi ini tidak ada.

            3.  Menggunakan Fungsi document.write()
                Objek document adalah objek yang mewakili dokumen HTML di dalam Javascript
                Dalam objek document, terdapat fungsi write() untuk menulis sesuatu ke dokumen HTML
                    <script>
                        document.write("<h1>Hello World!</h1>");
                        document.write("<hr>");
                        document.write("<p>Saya sedang belajar Javascript</p>");
                        document.write("di <b>kerjasamagilang.com</b>")
                    </script>
            
            4.  innerHTML adalah sebuah atribut di dalam (objek) elemen HTML yang berisi string HTML
                Dengan innerHTML, kita dapat menampilkan output ke elemen yang lebih spesifik
                    <h1>Tutorial Javascript untuk Pemula</h1>
                        <div id="hasil-output"></div>


                    <script>
                        // membuat objek elemen
                        var hasil = document.getElementById("hasil-output");

                        // menampilkan output ke elemen hasil
                        hasil.innerHTML = "<p>Aku suka Javascript</p>";
                    </script>

## Percabangan atau Pengkondisian

    Percabangan  atau Pengkondisian adalah istilah untuk menggambarkan alur program yang bercabang
    Selain percabangan, struktur ini juga disebut: control flow, decision, struktur kondisi, Struktur if, dsb.
    Percabangan akan mampu membuat program berpikir dan menentukan tindakan sesuai dengan logika/kondisi
    yang kita berikan.

        Pada Javascript terdapat 6 bentuk Pengkondisian atau Percabangan yang harus kita ketahui

        1. Percabangan atau Pengkondisian IF
            Percabangan if merupakan percabangan yang hanya memiliki satu blok
            pilihan saat kondisi bernilai benar   

        2. Percabangan atau Pengkondisian IF ELSE
            Percabangan if/else merupakan percabangan yang memiliki dua blok pilihan
            Pilihan pertama untuk kondisi benar, dan pilihan kedua untuk kondisi salah (else)  

        3. Percabangan atau Pengkondisian IF ELSE IF
            Percabangan if/else/if merupakan percabangan yang memiliki lebih dari dua blok pilihan

        4. Percabangan atau Pengkondisian Switch Case
            Percabangan switch/case adalah bentuk lain dari percabangan if/else/if
            Kita dapat membuat blok kode (case) sebanyak yang diinginkan di dalam blok switch
            Pada <value>, kita bisa isi dengan nilai yang nanti akan dibandingkan dengan varabel
            Setiap case harus diakhiri dengan break. Khusus untuk default, tidak perlu diakhiri
            dengan break karena dia terletak di bagian akhir, pemberian break bertujuan agar
            program berhenti mengecek case berikutnya saat sebuah case terpenuhi.

        5. Percabangan atau Pengkondisian dengan operator Ternary
            Percabangan menggunakan opreator ternary merupakan bentuk lain dari percabangan if/else.
            Bisa dibilang: Bentuk singkatnya dari if/else.

        6. Percabangan atau Pengkondisian Bersarang
            Kita juga dapat membuat blok percabangan di dalam percabangan.
            Ini disebut percabangan bersarang atau nested if.

        7. Percabangan atau Pengkondisian dengan operator Logika
            Percabangan bersarang, sebanarnya bisa kita buat lebih sederhana lagi
            dengan menggunakan operator logika.




## Perulangan pada Javascript

    Perulangan akan membantu kita mengeksekusi kode yang berulang-ulang berapa pun kita mau

    Ada 5 macam perulangan pada Javascript. Secara umum dibagi menjadi 2

        • Counted Loop

        • Uncounted Loop

            Perbedaannya:

                •   Counted Loop merupakan perulangan yang jelas dan
                    sudah tentu banyak perulangannya.

                •   Uncounted Loop merupakan perulangan yang tidak jelas
                    berapa kali ia harus mengulanginya


                Contoh:                                      Contoh:             

                    FOR (Counted Loop)                          While (Uncounted Loop)
        
                    Push Up 10x                                 Push Up Sampai bosan

                    For (i = 0; i < 10; i++){                   while (not bosan){
                        pushUp();                                   pushUp();
                    }                                           }    

        Perulangan yang termasuk Counted Loop:

            • For
            • Foreach
            • Repeat

        Perulangan yang termasuk Uncounted Loop:

            • While
            • Do/While

        Perulangan lainnya

            • Perulangan nested atau bersarang

        
## Function Javascript

    Function

        • Sebuah sub-program / sub-routine yang dapat DIPANGGIL di bagian lain pada program
        • Merupakan struktur dasar pembentuk dari Javascript
        • Disebut juga prosedur 'Kumpulan statement untuk melakukan tugas atau menghitung nilai'
        • Untuk dapat menggunakannya, kita harus 'Membuat' terlebih dahulu function tersebut lalu 'Memanggil'
        • Termasuk kedalam first-class object

###         1. Built-in Function

###         2. User-Defined Function


####            1. Built-in Function

                    • Funtion ini sudah disediakan oleh Javascript, kita tinggal memanggilnya

######              CONTOH 
                        • alert();
                        • confirm();
                        • prompt();
                        • console.log();
                        • charAt();
                        • toUpperCase();
                        • toLowerCase();

                    var nama = "Gilang Purnama";
                    console.log(nama.charAt(5))

            
####            2. User-Defined Funtion

                    • Function yang kita buat sendiri
                    • Menggunaka keyword funtion
                    • Di dalam funtion memiliki parameter atau argumen
                        • Disimpan di dalam ()
                        • Dapat memiliki parameter lebih dari satu ataupun tidak memiliki parameter
                        • Jika lebih dari satu dipisah dengan koma ,
                    • Function body dibungkus dengan kurung kurawal {}
                    • Dapat mengembalikan nilai (return value) atau tidak

######              Membuat User-Defined Funtion

######                  1. Deklarasi
######                  2. Ekspresi

                            1. Deklarasi
                             
                                funtion matematika(a, b) {
                                    var total;
                                    total = a + b;

                                    return total;
                                }

                            2. Ekspresi

                                var matematika = function (a, b) {
                                    var total;
                                    total = a + b;

                                    return total;
                                }

                    
######              Menjalankan Funtion

                        alert(matematika(1, 2));
                        console.log(matematika(4, 9));
                        