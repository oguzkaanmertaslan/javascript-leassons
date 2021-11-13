//********* MANTIKSAL OPERATÖRLER */
let price ="100"
let name="Oguz"
//***Eşitse == */
console.log(price==100)//true
console.log(price==50)//false

/****Değer Veri Tipi Eşitse  ===*/
console.log(price===100)// false döner çünkü biz price a string veri atadık burada number ile eşitledik
console.log(price==="100")//true

/****Eşit Değilse != */
console.log(price!=50)// true burada price 50 ye eşit olmadığı için true döndü

//**** Küçükse(<) - Küçük Eşitse (<=) - Büyükse (>) - Büyük Eşitse (>=) */

console.log(price<150)//True Küçükse 150 den
console.log(price<=100)//True 100 den Küçükse veya 100 e Eşitse
console.log(price>150)// False Büyükse - 150 den büyük olmadığı için false 
console.log(price>=100)// True Büyük veya eşitse 

//**** && ve burada iki değerinde kontrolünün doğru olması gerkir */
console.log(price==100 && name=="Oguz")// true iki eşitlikte doğru
console.log(price==100 && name=="Kaan")// false price doğru fakat name yanlış

//**** || veya burada iki değerden birisinin doğru olması yeterli  */
console.log(price==100 || name=="Oguz")// true ikiside doğru
console.log(price==100 || name=="Kaan")// true price doğru olduğu için true döndü
//**** ! tersini kontrol etme */
console.log(!(price==100 && name=="Oguz")) //False Normalde true dönen verinin tersini ! ile aldık false çıktısını aldık aldık