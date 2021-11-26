/*function TestandoTimeout(){
    setTimeout(() => {
        const valores = [1,2,3,4];
        console.log(valores);
    }, 1000);
}

TestandoTimeout();
*/

/*
const url = 'https://api.randomuser.me';

fetch(url).then((response) =>{
    console.log(response);
    return response.json();

}).then((body)=>{
    console.log(body);
})
*/

const url = 'https://api.randomuser.me';

fetch(url).then((response) =>{

    return response.json();

}).then((body)=>{

    window.body = body.results[0];
    body = body.results[0];
    let nome = `${body.name.first} ${body.name.last}`;
    document.getElementById('nome').innerText = nome;
    let imagem = body.picture.large
    document.getElementById('img').innerHTML = `<img src="${imagem}">`;

})