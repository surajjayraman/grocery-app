// baseUrl + person.imageId + '.jpg' produces the correct URL string
export const getImageUrl = (person, size) => {
    const baseUrl = 'https://i.imgur.com/';
    let thumbnailSize = 's';
    if (size > 90){
        thumbnailSize = 'b';
    }
    return (baseUrl + person.imageId + thumbnailSize + '.jpg');
}

