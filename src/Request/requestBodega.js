import axios from 'axios';

export const obtenerTodasBodegas = () => {

    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            return false;
        });

};