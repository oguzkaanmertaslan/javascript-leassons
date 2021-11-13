//Fonksiyonlar Bölüm Sonu Çalışması
// Tıklanan Butona Göre Sayıyı Arttırma veya Azaltma
let counter=localStorage.getItem("counter")?JSON.parse(localStorage.getItem("counter")):0
let sayac=document.querySelector("#sayac")
sayac.innerHTML=counter

let arttir=document.querySelector("#arttir")
let azalt=document.querySelector("#azalt")
arttir.addEventListener("click",ekleme)
azalt.addEventListener("click",azaltma)

function ekleme() {
    sayac.innerHTML =(counter+=1)
    JSON.stringify(localStorage.setItem("counter",counter))
}
function azaltma() {
    sayac.innerHTML =(counter-=1)
    JSON.stringify(localStorage.setItem("counter",counter))
}