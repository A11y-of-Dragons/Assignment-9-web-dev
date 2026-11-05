console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=wI8PEcrdnuSbkcgzZPGc18EOiS1R0n1p&q=cats"; 

function getGiphy(){
fetch(endpoint).then(function(fun){
    console.log(fun)
    return fun.json()
}).then(function(json){
    const gifContainer  = document.getElementById("gif-container")
    let images = [ ]

    json.data.forEach(function(obj){
        const url = obj.images.fixed_width.url
        images += `<img src="${url}" class="col-3 mb-3">`;
    })
    gifContainer.innerHTML = images;
}).catch(function(error){
    console.log(error.message)
});
};
const button = document.getElementById("fetch-gif-btn");

button.addEventListener("click", function () {
  getGiphy();
});