//********** Template Literals Kullanımı

let username="okm"
let DOMAIN="google.com"
let email=username+"@"+DOMAIN
//*Template literals kullanırken ` işareti kullanırız 2 ` içerisinde ${} içerisinde 
//istediğimiz kodları yazılarla birlikte kullanabiliriz

let info=
`
Merhaba ${username} 
Mail adresiniz: ${email}
Mail adresinizin uzunluğu: ${email.length}
Borcunuz: ${(2+5)*10} TL
Saat Bilgisi: ${new Date().getHours()}
Kısa adınız: ${username[0]}. 
`
console.log(info)