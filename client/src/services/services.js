import axios from 'axios'

export const getData = () => {
    return axios.get('http://localhost:3001/all-food/');
}
// export const postData = () => {
//     return axios.get('http://localhost:3001/data')
// }
// export const deleteData = () => {
//     return axios.get('http://localhost:3001/data')
// }
// export const modifyData = () => {
//     return axios.get('http://localhost:3001/data')
// }
