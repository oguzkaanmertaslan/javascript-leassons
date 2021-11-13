//*****String veri türleri ile çalışma
let firstName="oğuz"
let lastName="MERTASLAN"
let email="kmertaslan66@gmail.com"

//***String İfadenin Uzunluğunu Bulma  .length */
console.log(email.length) //22

//***String ifadenin İlk Karakterini Bulma [0] (index ile buluyoruz) */
console.log(firstName[0]) //o

//***String ifadeyi Büyük(toUpperCase) veya Küçük(toLowerCase) Harf Yapma */
console.log(firstName.toUpperCase())//OĞUZ
console.log(firstName.toLowerCase())//oğuz

//***String İfade İçerisinde İstediğimiz Bilgiyi Aramak Yerini Bulmak search */
console.log(email.search('@')) //Çıktısı 12 indexini verir
console.log(email[12]) // @ işaretini index ile yazdırırız

//***String İfadenin Belli Bir Kısmını Alma  slice */
//DOMAIN Bilgisi
let DOMAIN=email.slice(email.search('@')+1) // @ işaretinden sonrasını almak istediğimiz için index +1 yaptık
console.log(DOMAIN) // gmail.com
//belli bir yere kadar yazdırma örn. sadece gmail olan kısmı yazdırma
DOMAIN= DOMAIN.slice(0,DOMAIN.indexOf('.'))//indexof ile Sıfırıncı indexten başlamasını ve . görene kadar yazdırmasını sağladık
console.log(DOMAIN)//gmail

//***String bir ifadenin istediğimiz kısmını değiştirme replace */
email=email.replace('gmail.com','hotmail.com')//gmail.com kısmını hotmail.com olarak değiştirdik
console.log(email)//kmertaslan66@hotmail.com

//***String ifadede istediğimiz bilgi varmı (includes) true ve false döndürür*/
console.log(email.includes('hotmail'))//true
console.log(email.includes('sssss'))//false

//***String İfade İstediğim Bilgi İle başladımı(startsWidth)/bittimi(endsWidth) true/false döndürür*/
console.log(email.endsWith('hotmail.com'))//true
console.log(email.startsWith('kmert'))//true

//***String ifadenin ilk harflerini büyük yapma */
let fullName=`
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)
