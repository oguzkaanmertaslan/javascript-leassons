//*****Verii Türünü Öğrenmek

let price=111
let stringPrice="111"
let hasPassword=true

console.log(typeof(price)) //number
console.log(typeof(stringPrice)) //string
console.log(typeof(hasPassword)) //boolean

//typeof ile verinin türünü öğreniriz

//********String ifadeyi int ve floata çevirme

//String ifadeyi int yapma
let number1="11"
number1=parseInt(number1) //ParseInt ile sayıya çevirdik ve number1 e atadık
console.log(number1,typeof(number1))

//String ifadeyi float yapma
let number2="11.4px"
number2=parseFloat(number2) //ParseFloat ile floata çevirdik ve içeriden string ifade(px) almadı sadece 11.4 kısmını aldı
console.log(number2,typeof(number2))

//Number ifadeyi string yapma
let number3=11
number3=number3.toString() //toString ile ifadeyi stringe çevirdik 
console.log(number3,typeof(number3))





