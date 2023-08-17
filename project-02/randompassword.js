let btn = document.querySelector(".btn")
let inputs = document.getElementById("input")

let copyPwd = document.querySelector(".fa-copy")

let alertText = document.querySelector(".alert-container")

copyPwd.addEventListener('click',()=>{
    copyPass()

    if(inputs.value){
        alertText.classList.remove("active")

        setTimeout(() => {
            alertText.classList.add("active")
    
        }, 2000);
    }

})

btn.addEventListener('click', ()=>{
    generatePAssword()
})

let generatePAssword = ()=>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const pwdLenght = 12

    let password = ""

    for (let index = 0; index < pwdLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum +1)
        console.log(randomNum, password);
    }
    inputs.value = password
    alertText.innerText = `${password} has been copied `

}

let copyPass = () =>{
    inputs.select();
    navigator.clipboard.writeText(inputs.value)
}