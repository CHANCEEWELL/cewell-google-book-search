import axios from 'axios';
const _ = require('lodash');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: async function (searchTerm) {
        const books = [];
        const result = await axios({
            method: 'get',
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm,
        });
        result.data.items.forEach(element => {
            books.push({
                id: _.get(element, 'id', ''),
                title: _.get(element, 'volumeInfo.title', 'Title currently not availible'),
                authors: _.get(element, 'volumeInfo.authors', ['Unavailible']),
                description: _.get(element, 'volumeInfo.description', 'Description currently not availible'),
                image: _.get(element, 'volumeInfo.imageLinks.smallThumbnail', 'http://via.placeholder.com/128x190'),
                link: _.get(element, 'volumeInfo.infoLink', ''),
            })
        });
        return (books)
    },
    get: async function () {
        const results = await axios({
            method: 'get',
            url: '/api/books',
        });
        return results;
    },
    post: async function (book) {
        const results = await axios({
            method: 'post',
            url: '/api/books',
            data: book,
        });
        return results;
    },
    delete: async function (id) {
        const results = await axios({
            method: 'delete',
            url: 'api/books/' + id,
        });
        return results;
    }
};
