//******LİSTE İÇERİSİNDEKİ VERİYE ERİŞMEK VE ÖĞE EKLEMEK */

//**last-child  listenin son öğesi*/

let lastChild=document.querySelector("ul#list>li:last-child") // last-child ile son liste öğesine eriştik
lastChild.innerHTML="Öğe Değişti"// Listenin son öğesi -Öğe Değişti- olarak değişti

//**first-child listenin ilk öğesi */
let firstChild=document.querySelector("ul#list>li:first-child")// first-child ile ilk öğeye eriştik
firstChild.innerHTML="İlk Öğe Değişti"// Listenin ilk öğesini -İlk Öğe Değişti- Olarak Değiştirdik

//****VERİ EKLEME createElement append-prepend*/

let ulDOM=document.querySelector("ul#list")// burada idsi list olan ul ye ulaştık
let liDOM=document.createElement('li')//createElement ile yeni bir li oluşturduk tek tırnak içerisinde
liDOM.innerHTML="Yeni Eklenen Öğe"// oluşturduğumuz li ye veri girişi yaptık
//ulDOM.append(liDOM)// burada ul nin içerisinde oluşturduğumuz li yi ekledik -append- sona ekler
ulDOM.prepend(liDOM)// En başa ekler