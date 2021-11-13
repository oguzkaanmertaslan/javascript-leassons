//***FONKSİYONLAR */
//Belli Bir amacı gerçekleştirmek için oluşturulmuş yapılardır

//***Genel Fonksiyon Yapısı */
//   function name(){    fonksiyon adının ve parametrelerin yazıldığı kısımdır
//   burası fonksiyonun body kısmı yani işlemlerin yapılacağı kısımdır
// }
//name();
// console a merhaba + fullName  yazdıralım

function addition(sayi1,sayi2) { // Burada Fonksiyonumuz 2 adet parametre aldı 
    console.log(sayi1+sayi2) // Burada yapmak istediğimiz işlemi yazdık
}
addition(5, 6) // 11 çıktısını alırız
//Bir Fonksiyonu Başka bir Fonksiyon içerisinde kullanma ve Döküman içerisinde id ye istediğimiz bilgiyi yazdırma
function fullName(firstName,lastName) {  
    let bilgi=`Merhaba ${firstName} ${lastName}` 
    return bilgi; //return ile fonksiyon içerisindeki bilgileri dışarıya dönderebiliyoruz
}

function domIdWrite(id,info) {
    let domId=document.querySelector(`#${id}`)
    domId.innerHTML=info  
}
domIdWrite('info',fullName("Oğuz Kaan","MERTASLAN")) //info parametresine farklı bir fonksiyon tadık

/*** ÖRNEK Farklı yarçaptaki 2 dairenin alanlarının çarpımı */

function daireAlanHesapla(r,pi=3.14) {
    return pi*(r*r)
}
function dairelerCarpimi(alan1,alan2) {
    return alan1*alan2;
}
let birinciDaire=daireAlanHesapla(3)
let ikinciDaire=daireAlanHesapla(5)
let sonuc=dairelerCarpimi(birinciDaire,ikinciDaire)
console.log(sonuc)

//Verilen sayının faktöriyelini hesaplama
function faktor(sayi1){
    let sonuc = 0
    for (let i = 1;i<sayi1;i++){
        sonuc +=sayi1*i     
    }
    console.log(sonuc)
}
faktor(4);
