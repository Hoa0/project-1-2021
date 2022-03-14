import { getData } from "./data.js";
import { setBooks } from "./render.js";

const display = document.getElementById('book-collection');

export function router(){
const baseURL='https://zoeken.oba.nl/api/v1/search/?q=boek&authorization=1e19898c87464e239192c8bfe422f280&refine=true'
const secret = '4289fec4e962a33118340c888699438d'

    routie({
        overview: async function(){
            const getOverview = await getData(`${baseURL}${secret}`)
            console.log('hoi iets')
            return setBooks(getOverview, display)
        }
    })
}
