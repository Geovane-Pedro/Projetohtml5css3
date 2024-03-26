function toShow() {
    let inputPass = document.querySelector("#password")
    let btnShowPass = document.querySelector("#eye")

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.src = '../img/eye.png'
    } else {
        inputPass.setAttribute('type','password')
        btnShowPass.src = '../img/eyeBlock.png'
    }
}
function redirect(){
    let index = document.getElementsByTagName("form").value;
    if (index == undefined) {
        console.log(index)
    } else {
        location.href="file:///E:/codigos/DSI/Projetohtml5css3/index.html";        
    }
}