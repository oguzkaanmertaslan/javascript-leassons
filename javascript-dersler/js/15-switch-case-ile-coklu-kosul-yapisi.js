//Switch Case ile çoklu koşul yapısı kurulabilir
//hava durumuna göre consoleda çıktı alalım
//hava değişkenini değiştirerek farklı çıktılar alabilirsiniz

let hava="Yagmurlu" 

switch (hava) {// bu satırda hava değişkenini kontrol ediyoruz
    case "Gunesli":// case içerisinde hava değişkenine atanan veriye göre işlem yaptırıyoruz
        console.log("Hava Çok Güzel")
        break;
    case "Yagmurlu":
        console.log("Şemsiyeni Al")
        break;
    case "Karli":
        console.log("Kalın Giyinmelisin")
        break;
    case "Firtinali":
        console.log("Dışarı Çıkma")
        break;
    default:
        console.log("bilinmeyen Hava Durumu",hava)
        break;
}