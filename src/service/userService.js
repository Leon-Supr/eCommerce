import axios from 'axios';

const BASE_URL = "https://ecommerce-json-jwt.onrender.com"
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data) //Le voy mandar el data para que haga el post

export {
    registerUserService
}