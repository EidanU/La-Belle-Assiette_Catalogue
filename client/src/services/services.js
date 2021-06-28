import axios from 'axios';

//For all request I use a proxy to only call the url '/api', this proxy is in the package.json
export const getData = () => {
    return axios.get('/api');
}
export const postData = (data) => {
    return axios.post('/api', data);
}
export const modifyData = (data) => {
    return axios.put('/api', data);
}
export const deleteData = (id) => {
    return axios.delete('/api', { data: id });
}

