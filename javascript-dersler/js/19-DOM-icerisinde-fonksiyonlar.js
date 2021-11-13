//***DOM İÇERİSİNDE FONKSİYON İLE ÇALIŞMAK */
//addEventListener **********

let info=document.querySelector("#info")
info.addEventListener("click",merhaba)

function merhaba() {
    console.log("tıklandı")
    this.style.color=="black" ? this.style.color="red" : this.style.color="black"
}