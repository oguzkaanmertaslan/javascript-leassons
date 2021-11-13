//********Dom içerisindeli öğe seçimi ve düzenleme işlemleri

//***getElementById kullanımı */
let title = document.getElementById('title')
title.innerHTML="Değişen Bilgi"
console.log(title.innerHTML)

//***querySelector */

let link=document.querySelector("#okmLink")// a tag indeki id ye ulaştık
link.innerHTML += " değişti" // içerisindeki yazan bilgiyi (innerHTML ile) aldık ve sonuna değişti ekledik
console.log(link.innerHTML) // bilgiyi yazdırdık
link.style.color="red" //linkin rengini kırmızı yaptık
link.classList.add('btn') // tag in içerisine class ekledik