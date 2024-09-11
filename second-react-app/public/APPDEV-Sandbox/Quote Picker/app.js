const quotes = ["We suffer more in imagination than in reality.", "A gem cannot be polished without friction nor a man perfected without trials", "Dwell on the Beauty of life.", "Everything we hear is an opinion, not a fact.", "The soul becomes dyed with the color of it's thoughts."];
const authors = ["-Seneca","-Seneca","-Marcus Aurelius","-Marcus Aurelius","-Marcus Aurelius"]
const btn = document.getElementById("btn");
const quote = document.querySelector(".quotes");
const  author = document.querySelector(".authors");

//function for changing the color
btn.addEventListener("click", ()=>{

    const randomNumber = getRandomNumber()

    quote.textContent = quotes [randomNumber]
    author.textContent = authors[randomNumber]
})
getRandomNumber = () =>{
        return Math.floor(Math.random() * quotes.length)
}