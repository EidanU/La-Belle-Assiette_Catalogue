import axios from 'axios'

export const getData = () => {
    return axios.get('/api');
}
export const postData = (data) => {
    console.log(data);
    return axios.post('/api', data)
}
// export const deleteData = () => {
//     return axios.get('http://localhost:3001/data')
// }
// export const modifyData = () => {
//     return axios.get('http://localhost:3001/data')
// }
