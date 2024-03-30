let btnShowPass = document.querySelector("#eye")
let btnShowPass2 = document.querySelector("#eye2")
let userName = document.querySelector("#userName")
let email = document.querySelector("#email")
let inputPass = document.querySelector("#password")
let confirmPass = document.querySelector("#password2")
let confirmLabel = document.querySelector("#confirmLabel")

btnShowPass.addEventListener('click', () => {
    
    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.src = '../img/eye.png'
    } else {
        inputPass.setAttribute('type','password')
        btnShowPass.src = '../img/eyeBlock.png'
    }
})

btnShowPass2.addEventListener('click', () => {
    
    if (confirmPass.type === 'password') {
        confirmPass.setAttribute('type','text')
        btnShowPass2.src = '../img/eye.png'
    } else {
        confirmPass.setAttribute('type','password')
        btnShowPass2.src = '../img/eyeBlock.png'
    }
})

function redirect(){
    let index = document.getElementsByTagName("form").value;
    if (index == undefined) {
        console.log(index)
    } else {
        location.href="file:///E:/codigos/DSI/Projetohtml5css3/index.html";        
    }
}
//tela de cadastro
userName.addEventListener('keyup',()=>{
    if(userName.value.length <= 3){
        userName.setAttribute('style','border-color: red')
    }else{
        userName.setAttribute('style','border-color: #272262')
    }
})
email.addEventListener('keyup',()=>{
    if(email.value.length <= 12){
        email.setAttribute('style','border-color: red')
    }else{
        email.setAttribute('style','border-color: #272262')
    }
})
confirmPass.addEventListener('keyup',()=>{
    if(inputPass.value != confirmPass.value){
        confirmPass.setAttribute('style','border-color: red')
        confirmLabel.setAttribute('style', 'color:red')
        confirmLabel.innerHTML = 'As senhas não conferem!'
    }else{
        confirmPass.setAttribute('style','border-color: #272262')
        confirmLabel.setAttribute('style', 'color:#ffffff')
        confirmLabel.innerHTML = 'As senhas conferem!'
    }
})