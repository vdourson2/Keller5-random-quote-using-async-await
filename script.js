async function getJsonPromise () {
    try {
    const response = await fetch("https://thatsthespir.it/api");
    const json = await response.json();
    return json
    }
    catch(error) {
        console.log('Erreur : impossible de récupérer les données')
    }
}

async function displayJson (){
    let jsonData = await getJsonPromise();
    



    console.log(jsonData.quote);
}

displayJson();

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