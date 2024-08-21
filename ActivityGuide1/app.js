//Component of First Item
const btn1 = document.getElementById("Button1")
//Display Script
btn1.addEventListener("click", () => {
    // create and initialize our variables
let name = document.getElementById("name").value
let address = document.getElementById("address").value
let telephone = document.getElementById("telephone").value
let major = document.getElementById("major").value

let x =`Hello ${name}, I see that youre from ${address} and your also pursuing ${major} and you can be contacted using ${telephone}.`
document.getElementById("output1").innerHTML = x
}
)