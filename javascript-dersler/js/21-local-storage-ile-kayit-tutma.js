//***LOCAL STORAGE BELİRLEDİĞİMİZ İŞLEMLERİ BROWSER ÜZERİNDE TUTMAMIZA YARAR */

//localStorage veri ekleme setItem
//localStorage.setItem("key","value")
//setItem ile ilk olarak bir key belirleriz ve value kısmına tutmak istediğimiz değeri belirtiriz

//localStorage veri okuma/çağırma getItem
//localStorage.getItem("key")
//getItem ile set ettiğimiz keyi çağırırız ve veriyi okumamızı sağlarız

//localStorage belirli bir veriyi silme(remove) veya tüm verileri silme (clear)
//localStorage.removeItem("key")//verilen key ile o keye ait değeri siler
//localStorage.clear()//tüm verileri siler

//localStorage da veriler her zaman string olarak kayıt altında tutulur
//string olmayan verileri kullanmak için JSON.stringify ile stringe çeviririz kullanırken JSON.parse ile normal türde çağırırız

/****************************************************************************** */

//localStorage ile Sayaç Uygulaması
//Fonksiyonlar kısmında yaptığımız sayaç çalışmasında ekranı yenilediğimizde sayaç sıfırlanıyor
//localStorage ile browser tarafında kayıt tuttuğumuz için ekranıo yenilesekte sayaç kaldığı yerden devam ediyor

let counter=localStorage.getItem("counter")?JSON.parse(localStorage.getItem("counter")):0

let sayac=document.querySelector("#sayac")
let arttir=document.querySelector("#arttir")
let azalt=document.querySelector("#azalt")
sayac.innerHTML=counter
arttir.addEventListener("click",uppFunc)
azalt.addEventListener("click",downFunc)
function uppFunc() {
    sayac.innerHTML=counter+=1
    JSON.stringify(localStorage.setItem("counter",counter))
}
function downFunc() { 
    sayac.innerHTML=counter -=1
    JSON.stringify(localStorage.setItem("counter",counter))
}
