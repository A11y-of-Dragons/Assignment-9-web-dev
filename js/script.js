console.log("script.js loaded");
let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=wI8PEcrdnuSbkcgzZPGc18EOiS1R0n1p&q=cats"; 

fetch(endpoint).then(function(images){
    console.log(images)
    return images.json()
}).then(function(json){
    console.log(json.data[0].images.fixed_width.url)
    const resultsEl = document.getElementById("gif-container")
    let images = [];
    json.data.forEach(function(obj){
        console.log(obj.images.fixed_width.url)
        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        const height = obj.images.fixed_width.height
        const title = obj.title
        images += `<img src="${url}" width="${width}"><img>`
    })
    resultsEl.innerHTML = images;
}).catch(function(error){
    console.log(error.message)
});