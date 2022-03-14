export function setBooks(response, element){
    const collectionOfBooks =[];

    response.bookObjects.forEach(bookObjects =>{
        collectionOfBooks.push({
            title: bookObjects.titles
        })
    })
overviewInfo(collectionOfBooks);
 console.log(`log collectionOfBooks`, collectionOfBooks);
}