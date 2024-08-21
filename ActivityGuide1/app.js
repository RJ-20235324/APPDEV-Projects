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

Calculate.addEventListener("click", ()=>{
let time = document.getElementById("Vehicle_Time").value

let speed = "60"

typeof parseInt(speed)
typeof parseInt(time)

let distance = speed * time

let message = `ANSWER: The Traveled distance of the Vehicle is ${distance} Miles.`

 document.getElementById("Car_Distance").innerHTML = message
} 
)

MPG_Cal.addEventListener("click", ()=>{
    let Miles = document.getElementById("Miles").value
    let Galloons = document.getElementById("Gallon").value

    typeof parseInt(Miles)
    typeof parseInt(Galloons)

    let MPG = Miles / Galloons

    let Calculated_MPG = `ANSWER: Miles-per-Gallon used is ${MPG}.`

    document.getElementById("MPG_ans").innerHTML = Calculated_MPG

}
)

FtoC.addEventListener("click", ()=>{
    let cel = document.getElementById("Celsius").value
    parseInt(cel)

    F = (cel * 9/5) + 32

    let F_Mess = `ANSWER: ${F} Fahrenheit`

    document.getElementById("cel_far").innerHTML = F_Mess
})