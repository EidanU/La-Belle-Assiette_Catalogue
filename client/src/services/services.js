import axios from 'axios';

export const getData = () => {
    return axios.get('/api');
}
export const postData = (data) => {
    return axios.post('/api', data);
}
export const modifyData = (id) => {
    console.log(id);
    return axios.put('/api', { data: id });
}
//here the second args of delete() needs to be a object with the object data inside
export const deleteData = (id) => {
    return axios.delete('/api', { data: id });
}

