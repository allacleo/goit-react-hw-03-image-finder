const fetchImages = (query, pageNumber = 1) => {
    const URL = 'https://pixabay.com/api/';
    const API_KEY = '14358820-19f97d01650f3dca50e86745d';

    return fetch (
        `${URL}?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`,
    )
    .then(res => res.json())
    .then(data => data.hits)
    .catch(error => {
        throw error;
    });
    };

    export default {fetchImages};
