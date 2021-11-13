///********* PROMPT İLE KULLANICIDAN VERİ ALMA */
//*** Kullanıcıdan İsim bilgisini alalım ve bunu dökümanımıza yazdıralım */

let name=prompt("Lütfen Adınızı Giriniz: ") //Prompt ile kullanıcıdan name bilgisini aldık
let info=document.querySelector("#info")// döküman içerisinde info isimli id ye ulaştık
info.innerHTML=name // info id sinin içerisine kullanıcıdan aldığımız veriyi yazdırdık