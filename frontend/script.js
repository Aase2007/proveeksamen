let PROJECT_ID = 'hsjaawa5'
let DATASET = 'production'
let QUERY = encodeURIComponent(`*[_type == "varer"]`) //ber om alle varer med alle variabler
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY})`

async function hentVarer() {
    let response = await fetch(URL)
    let data = await response.json()
    let varer = data.result

    console.log(varer)
}
hentVarer()