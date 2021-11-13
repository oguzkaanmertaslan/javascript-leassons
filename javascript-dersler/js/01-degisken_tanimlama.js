
//******Değişken Tanımlama

//*******var ile değişken tanımlama (artık let ve const kullanılmaya başlandı)

// var serverName="kodluyoruz.org";
// console.log(serverName);

//*******let ve const ile değişken tanımlama

// let serverName;// let istediğimiz zaman içerisindeki veriyi değiştirebiliriz.
// serverName="api.kodluyoruz.org"
// console.log(serverName)

// const serverPassword="121314151" //const Tc kimlik numarası gibi değiştirilemeyecek şeylerde kullanılır. Sonradan değerini değiştiremeyiz
// console.log(serverPassword)

//Değiştirebileceğimiz verileri let ile tanımlarız
//Değiştiremeyeceğimiz verileri const ile tanımlarız

//Number(sayısal) veri türlerini kullanma

let price=100
let tax=0.18
let priceTax=price*tax
let totalPrice=price+priceTax

console.log("Fiyat: ", price, "Kdv Oranı: ", tax, "Kdv Tutarı: ", priceTax, "Tolam Fiyat: " ,totalPrice )



