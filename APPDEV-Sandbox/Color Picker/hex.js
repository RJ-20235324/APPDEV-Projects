const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","E"]
//sample output random
const btn = document.getElementById("btn")
//controls content of span class = color
const color = document.querySelector(".color")
//controls the button
btn.addEventListener("click", ()=>{
    let hexColor = '#'
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor

    document.body.style.backgroundColor = hexColor
})
getRandomNumber = () =>{
    return Math.floor(Math.random() * hex.length)}