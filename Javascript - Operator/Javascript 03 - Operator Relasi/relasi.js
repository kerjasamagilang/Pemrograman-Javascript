/*
    Nama Operator	            Simbol

    Lebih Besar dari	            >
    Lebih Kecil dari                <
    Sama Dengan	                == atau ===
    Tidak Sama dengan	        != atau !==
    Lebih Besar Sama dengan	        >=
    Lebih Kecil Sama dengan	        <=
*/

var aku = 20;
var kamu = 19;

// sama dengan
var hasil = aku == kamu;
document.write(`${aku} == ${kamu} = ${hasil}<br/>`);
        
// lebih besar
var hasil = aku > kamu;
document.write(`${aku} > ${kamu} = ${hasil}<br/>`);
        
// lebih besar samadengan
var hasil = aku >= kamu;
document.write(`${aku} >= ${kamu} = ${hasil}<br/>`);
        
// lebih kecil
var hasil = aku < kamu;
document.write(`${aku} < ${kamu} = ${hasil}<br/>`);
        
// lebih kecil samadengan
var hasil = aku <= kamu;
document.write(`${aku} <= ${kamu} = ${hasil}<br/>`);
        
// tidak samadengan
var hasil = aku != kamu;
document.write(`${aku} != ${kamu} = ${hasil}<br/>`);