///****Array(Dizi) Oluşturmak ve İçerisindeki Verilere Ulaşmak */

//**Array Oluşturmak let diziName=[] */

let domain="okm.com"
let isActive=false
let items=[1,2,3,isActive,domain]
let empty=[]
//Farklı veri türlerini içerisinde tutabiliriz ve boş bir Array tanımlayabiliriz

//Array'in uzunluğuna bakmak (name.length)
console.log(items.length) //5

//Array'in ilk ögesine ulaşmak ([index numarası])
console.log(items[0])//1

//Array'in son ögesine ulaşmak
console.log(items[items.length-1])//okm.com

//Değişkenin içerisindeki bilgi Array mi? -> Array.isArray(arrayName) true-false
console.log(Array.isArray(items))//true

//Array'in ortasındaki veriye ulaşmak Math.floor
console.log(Math.floor([items.length/2]))
