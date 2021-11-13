//******if else KOŞUL YAPISI */
//if else eğer sorusudur ve yaptığımız işlem true dönerse if çalışır yanlışsa else çalışır
// Kullanıcı veri girişi sağlamışsa ekrana yazdıralım
//Veri Girişi olmamışsa consola bilgi yok yazdıralım
let fullName=prompt("Lütfen Adınızı Giriniz:")

if (fullName.length>0) {// burada .length ile içerisine veri girişi olup olmadığını kontrol ettik
    console.log(fullName)//veri girişi varsa bu satır çalışır ve girilen veri console a yazdırılır
}
else// burada veri girişi olmadığı durumda ne olacağı yazılır
{
    console.log("bilgi yok")//veri girişi olmamışsa bu satır çalışır
}