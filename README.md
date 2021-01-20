## cara menulis kode Javascript

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