let items=[1,2,3,4,5]
let femaleUsers=["Ayşe","Hülya","Fatma"]
let maleUsers=["Ahmet","Hasan","Mehmet"]

//Array içerisinde Array
//Başa array ekleme
items.unshift(femaleUsers) //items Array'inin başına femaleUsers Array'i eklendi
console.log(items)//Çıktımızda femaleUsers'ı Array olarak görürüz
//Sona array ekleme
items.push(maleUsers)//items Array'inin sonuna maleUsers Array'i eklendi
console.log(items)//Çıktıda sona Array şeklinde maleUsers Eklendi

//Array içerisindeki Array'in uzunluk bilgisi ve ilk bilgiye ulaşmak
console.log(items[0].length)//3 -> femaleUsersın uzunluğunu kontrol eder
console.log(items[0][0])//Ayşe -> 0'ıncı indexteki Arrayin 0'ıncı indexi

//Array içerisinden öğe ayırmak splice(hangi indexten başlayacak,kaç öğe silecek,yerine öğe gelecekse buraya)
let newItem=items.splice(1,5,)
console.log("Arrayin yeni hali: ",items,
"İçerisinden çıkardığımız öğeler",newItem)

//Array içerisindegi öğenin index numarasını öğrenme  indexOf('value')
items.unshift("lorem")
items.push("ipsum")
console.log(items.indexOf("ipsum"))//3

//Array'i kopyalamak slice

let newDizi=items.slice()// items dizisini kopyaladık ve newDizi değişkenine atadık
newDizi.pop()//Dizinin son elemanını çıkarttık
console.log(newDizi)//yeni oluşturduğumuz diziden son eleman çıktı
console.log(items)//eski dizimiz hala aynı olarak kalır

//ES6 ile gelen kopyalama işlemi [...es6]
let es6Item=[...items]//slice yerine bu şekildede kopyalama yapılabilir
es6Item.pop()
console.log(es6Item)
console.log(items)
//İki arrayi birleştirmek
let allUsers=[...femaleUsers,...maleUsers] //iki dizi birleşir ve tek dizi oluşur
console.log(allUsers)