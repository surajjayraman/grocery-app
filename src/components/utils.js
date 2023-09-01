// baseUrl + person.imageId + '.jpg' produces the correct URL string
export const getImageUrl = (person) => {

    return (person.baseUrl + person.imageId + '.jpg');
}

