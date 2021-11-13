/***Array(dizi) İÇERİSİNE YENİ ÖĞE EKLEME, ÇIKARTMA  ve GÜNCELLEME */
let items=[10,20,30,40]

/**Array'in sonuna ve başına öğe ekleme .push  .unshift*/
items.push(50) //dizinin sonuna 50 eklendi
items.unshift(5) //dizinin başına 5 eklendi
console.log("Naşa ve Sona Öğe Eklendi : ",items)

//**Array'in sonundaki öğeyi çıkartmak ve bir değişken içerisinde tutmak */
let lastItem=items.pop()
console.log("Sondaki Öğe çıkartıldı ve değişkende tutuldu: ",lastItem) //son item olan 50 yi değişkende tuttuk ve diziden çıkarttık
console.log("sondaki öğe çıktıktan sonraki dizi: ",items)

//**Array'in başındaki öğeyi çıkartmak ve değişken içerisinde tutmak */
let firstItem=items.shift()
console.log("Çıkartılan ilk item: ",firstItem)

//**Array'in başındaki ve sonundaki öğeyi değiştirme */
//İlk öğeyi değiştirme [0]
items[0]="Değişti"
console.log(items)
//Son öğeyi değiştirme
items[items.length-1]="son öğe değişti"
console.log(items)