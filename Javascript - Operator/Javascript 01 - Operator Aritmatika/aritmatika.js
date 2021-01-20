/*
    Nama Operator	Simbol
    Penjumlahan	        +
    Pengurangan	        -
    Perkalian	        *
    Pemangkatan	        **
    Pembagian	        /
    Sisa Bagi	        %
    Increment           ++
    Decrement           --
*/
var a = 15;
var b = 4;
var c = 0;

// pengurangan
c = a - b;
document.write(`${a} - ${b} = ${c}<br/>`);

// Perkalian
c = a * b;
document.write(`${a} * ${b} = ${c}<br/>`);

// pemangkatan
c = a ** b;
document.write(`${a} ** ${b} = ${c}<br/>`);

// Pembagian
c = a / b;
document.write(`${a} / ${b} = ${c}<br/>`);

// Modulo
c = a % b;
document.write(`${a} % ${b} = ${c}<br/>`);

// Increment
var x = 5;
var y = ++x;
var z = x++;
document.write(`${x}<br/>`)
document.write(`${"Ini adalah nilai ++X"} ${y}<br/>`)
document.write(`${"Ini adalah nilai X++"} ${z}<br/>`)

// Decrement
var o = 6;
var p = --o;
var q = o--;
document.write(`${o}<br/>`)
document.write(`${p}<br/>`)
document.write(`${"Ini adalah nilai P++"} ${p}<br/>`)
document.write(`${"Ini adalah nilai Q++"} ${q}<br/>`)


