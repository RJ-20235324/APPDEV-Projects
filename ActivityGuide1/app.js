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

Calculate_Prof.addEventListener("click", ()=> {
    const sales = document.getElementById('sales').value;
    const profit = sales * 0.23;

    let fResult = 'ANSWER: profit is ' + profit.toFixed(2)

    document.getElementById('result').innerHTML = fResult
}
)


Calculate.addEventListener("click", ()=>{
let time = document.getElementById("Vehicle_Time").value

let speed = "60"



let distance = speed * time

let message = `ANSWER: The Traveled distance of the Vehicle is ${distance} Miles.`

 document.getElementById("Car_Distance").innerHTML = message
} 
)

MPG_Cal.addEventListener("click", ()=>{
    let Miles = document.getElementById("Miles").value
    let Galloons = document.getElementById("Gallon").value


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

compute_C.addEventListener("click", ()=> {
    const cookiesPerBag = 40;
    const servingsPerBag = 10;
    const caloriesPerServing = 300;

    const caloriesPerCookie = (caloriesPerServing * servingsPerBag) / cookiesPerBag;

    const cookiesConsumed = document.getElementById('Cookies_Consumed').value;

    const totalCalories = cookiesConsumed * caloriesPerCookie;

    let CAL_Result = `ANSWER: Total calories consumed are ${totalCalories.toFixed(2)}`;
    document.getElementById('Calories_Calcu').innerHTML = CAL_Result;
})

S_percentage.addEventListener("click", ()=> {
    let Males = document.getElementById("male_Stud").value
    let Females = document.getElementById("female_Stud").value

    total_Class = parseInt(Males) + parseInt(Females)
    total_Male = parseFloat(Males) / parseFloat(total_Class) * 100
    total_Female = parseFloat(Females) / parseFloat(total_Class) * 100
    percent_Result = 'ANSWER: Total Students ' + total_Class + ' Males are ' + total_Male + "% of the population and Females are " + total_Female + "% of the population."

    document.getElementById('StudentPercentile').innerHTML = percent_Result;
})