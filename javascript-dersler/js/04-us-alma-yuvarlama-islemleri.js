//*******Üs alma (kuvvetini alma)
//let sayi=5

//sayi nin 2. kuvvetini alalım 5'in 2. kuvveti 25
//console.log(sayi**2)

//*******Sayıyı aşağı yuvarlama Math.floor

let sayi=1.9
console.log("Sayıyı aşağı yuvarladık: ",Math.floor(sayi)) // Aşağı tam sayıya yuvarlar ve sonuç 1 olur

//******Sayıyı yukarı yuvarlama Math.ceil

let sayi1=1.4
console.log("Sayıyıyı yukarı yuvarladık: ",Math.ceil(sayi1)) // Yukarı tam sayıya yuvarlar ve sonuç 2 olur

//*********Sayıyı en yakın tam sayıya yuvarlama

let sayi2=1.4

console.log("Sayıyı en yakına yuvarladık: ",Math.round(sayi2))//1.4 1 e yakın olduğu için sonuç 1

sayi2=1.6
console.log("Sayıyı en yakına yuvarladık: ",Math.round(sayi2))//1.6 2 ye yakın olduğu için sonuç 2