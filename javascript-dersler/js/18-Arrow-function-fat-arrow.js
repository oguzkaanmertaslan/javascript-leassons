//es6 ile gelen Arrow Function

//***Normal Bir Fonksiyon Tanımlama */
function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello("javascript")

/***Arrow Function ile Fonksiyon tanımlama (=> Fat Arrow) */
const hello1=(firstName)=> console.log(`Merhaba ${firstName}`)
hello1("arrow function")

//***Tek bir parametre alıyorsa firstName i parantez içine almamıza gerek yok */
const hello2=firstName=> console.log(`Merhaba ${firstName}`)
hello2("tek parametreli")

//***2 parametreli arrow function */
const hello3 =(firstName,lastName)=>console.log(`Merhaba ${firstName} ${lastName} `)
hello3("birinci param.", "ikinci param.")

//**Arrow Fonksiyon içerisinde birden fazla işlem yapacaksak {} süslü parantezler içerisinde yazmalıyız */
const hello4=(firstName,lastName)=>{
    let info=`Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info;
}
hello4("Çoklu satır, Return kullanma")

/****ÖRNEKLER */
//** İki Sayının Çarpımı */
const carpim=(sayi1,sayi2)=>console.log(sayi1*sayi2)
carpim(5,6) // 30

//**2 List i birleştirme (concat)*/
const list=(param1,param2)=>console.log(param1.concat(param2))//param1 parametresi ile param2 parametresini birleştirdik
list([1,2,3],[6,7])//[1,2,3,6,7]

/**örnek */
//  [1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun.
//  Bu array'in sonucu bize yeni bir array döndürsün.
//  Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. 
//  [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>
//  Sonuç çıktımız **[3,4,9,8,15]** olacak.
const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });
   return newNums 
}

console.log(newArray([1,2,3,4,5]));

