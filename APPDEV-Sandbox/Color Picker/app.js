const colors = ["green", "red", "rgba(133, 122, 200)", "f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//function for changing the color
btn.addEventListener("click", ()=>{

    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors [randomNumber]

    color.textContent = colors [randomNumber]
})
getRandomNumber = () =>{
        return Math.floor(Math.random() * colors.length)
}