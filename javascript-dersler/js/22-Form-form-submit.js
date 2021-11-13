

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener('submit',formAction)



let ALERT=document.querySelector("#alert")
function alertFunction(title,message,alertR="warning") {
    ALERT.innerHTML=`
<div class="alert alert-${alertR} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
}
function formAction(event){
    event.preventDefault()
    const USER_NAME=document.querySelector("#username")
    const USER_SCORE=document.querySelector("#score")
    
    if (USER_NAME.value && USER_SCORE.value) {
        itemAdd(USER_NAME.value,USER_SCORE.value)
        USER_NAME.value=""
        USER_SCORE.value=""
        alertFunction("Kullanıcı Adı ve Not Bilgisi", "Kayıt Başarılı", "success")
    } 
    else if (USER_NAME.value || USER_SCORE.value) {
        alertFunction(
            "Kullanıcı Adı ve Not Bilgisi",
            "Eksik Bilgi Girdiniz",
            "warning"
            )
        
    }
    else {
        alertFunction(
            "Kullanıcı Adı ve Not Bilgisi",
            "Lütfen İstenilen Bilgileri Giriniz",
            "danger"
            )
    }
    
}
let userListDOM=document.querySelector("#userList")
const itemAdd=(userName,score)=> { 
   let liDOM=document.createElement("li")
   liDOM.innerHTML=`
   ${userName} 
   <span class="badge bg-primary rounded-pill">${score}</span>`
   liDOM.classList.add(
       'list-group-item','d-flex','justify-content-between','align-items-center'
       )
    userListDOM.append(liDOM)
}