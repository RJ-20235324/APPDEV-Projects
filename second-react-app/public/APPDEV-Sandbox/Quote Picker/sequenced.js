const quotes = ["1. We suffer more in imagination than in reality.", "2. A gem cannot be polished without friction nor a man perfected without trials.", "3. Dwell on the Beauty of life.", "4. Everything we hear is an opinion, not a fact.", "5. The soul becomes dyed with the color of it's thoughts."];
const authors = ["-Seneca","-Seneca","-Marcus Aurelius","-Marcus Aurelius","-Marcus Aurelius"]
const btn = document.getElementById("btn");
const quote = document.querySelector(".quotes");
const  author = document.querySelector(".authors");
let i = -1

//function for changing the color
btn.addEventListener("click", ()=>{

    const randomNumber = getRandomNumber()

    quote.textContent = quotes [randomNumber]
    author.textContent = authors[randomNumber]
})
getRandomNumber = () =>{
    i++
    if(i==5){
       return  i = 0
    }else{
    return i}

    

    

}