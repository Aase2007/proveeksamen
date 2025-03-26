let PROJECT_ID = 'hsjaawa5'
let DATASET = 'production'
let QUERY = encodeURIComponent(`*[_type == "varer"]{varenavn, pris, kategorinavn->{kategori}, bilde}`) //ber om alle varer med alle variabler
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`
let varer //definerer varer her sånn at den finnes utafor hentVarer()

function bildeURL(vareIndex) { //finner url-en til bildet
    let bildeListe = varer[vareIndex].bilde.asset._ref.split('-') //deler bildereferansen inn i deler slik at den er lesbar
    let imageURL = `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${bildeListe[1]}-${bildeListe[2]}.${bildeListe[3]}` //lager URL for bilde
    return imageURL
}

async function hentVarer() {
    let response = await fetch(URL)
    let data = await response.json()
    varer = data.result //puter lista med objektene fra databasen inn i variabelen varer
    let vareList = document.getElementById('varer')
    for (let i = 0; i<varer.length; i++){

        vareList.innerHTML += 
            `<a class="vareboks" onclick="seVare('${i}')"> 
            <img class="varebilde" src="${bildeURL(i)}">
            <h2 class="varetittel"> ${varer[i].varenavn}</h2>
            <p> ${varer[i].pris}kr</p>
            <p> ${varer[i].kategorinavn.kategori}</p>
            </a>`;
    };
}
hentVarer()

function seVare(vareIndex){ //funksjon som kjører når man trykker på en av varene
    let vareside = document.getElementById('vareside')
    vareside.style.display = 'inline' //gjør siden synlig
    document.getElementById('main').style.opacity = '0.4' //gråer ut bakgrunnen
    vareside.innerHTML = `<div id="vareitems">
        <img id="hovedbilde" src="${bildeURL(vareIndex)}">
        <div>
            <h1>${varer[vareIndex].varenavn}</h1>
            <p>${varer[vareIndex].kategorinavn.kategori} </p>
            <h3>${varer[vareIndex].pris}</h3>
        </div>
    </div>`;
}