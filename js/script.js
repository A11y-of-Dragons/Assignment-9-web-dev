console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=&q=wI8PEcrdnuSbkcgzZPGc18EOiS1R0n1p&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips" 

async function getGif() {
    const response = await
    fetch(endpoint);
    const data = await response.json();
    const fact = data.facts[0];


    const output = document.getElementById("gif-output");
    output.textContent = fact;
    
}
const button = document.getElementById("fetch-gif-btn");
button.addEventListener("click", function(){

    getGif();
});