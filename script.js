async function getJsonPromise () {
    const response = await fetch("https://thatsthespir.it/api");
    const json = await response.json();
    return json
}

async function displayJson (){
    try {
    let jsonData = await getJsonPromise();
    let blockquote = document.querySelector('blockquote');
    blockquote.textContent = jsonData.quote;
    let img = document.getElementById('photo');
    img.src = jsonData.photo;
    let author = document.querySelector('figcaption');
    author.textContent = jsonData.author;
    console.log(jsonData);
    }
    catch(error) {
        console.log('Erreur : impossible de récupérer les données')
    }
}

displayJson();

let button = document.querySelector('button');
button.addEventListener('click',displayJson);

//const jsonPromise = getJsonPromise();
//jsonPromise.then(data => console.log(data));



// async function getJson () {
//     let PromiseJson = fetch("https://thatsthespir.it/api");
//     try{
//     let response = await PromiseJson;
//     console.log("réponse: ");
//     console.log(response);
//     let jsonData = await response.json();
//     console.log("jsonData: ");
//     console.log(jsonData.quote);
//     return jsonData;
//     }catch(error){
//         console.log("There is an error");
//         console.log(error);
//     }
// }
// console.log("Résultats: ");
// console.log(getJson());