function BocBien() {
    Tinh = Math.floor(Math.random() * 88) + 11;
    Chu = ['A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'H',
        'K',
        'L',
        'M',
        'N',
        'T',
        'U',
        'V',
        'X',
        'Y',
        'Z']
    randomNumber = Math.floor(Math.random() * 17)
    baSoDau = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    haiSoCuoi = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();

    bienSo = Tinh + Chu[randomNumber] + '-' + baSoDau + '.' + haiSoCuoi;
    document.getElementById("test").innerHTML = bienSo;
    document.getElementById("genBien").style.backgroundColor = 'red';
    setTimeout('mouseOut()', 100);
};

function mouseOut(){
    document.getElementById('genBien').style.backgroundColor = 'aqua';
}