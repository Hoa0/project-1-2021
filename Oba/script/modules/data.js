
/**
 * Functie exporteren met een link die data terug stuurt
 * @param {*} url 
 * @returns data from the API
 */
export const getData = async (url) =>{
    return await fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .finally(() => {
            console.log('klaar met laden')
            // binnenkort: een lader toevoegen en verwijderen
        })
}
