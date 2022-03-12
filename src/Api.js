import axios from 'axios'; //O Axios serve para consumir uma api

export default axios.create({
    baseURL:`http://localhost:8080/`  //Cria uma conexão com a api, no caso, o que está passando no atributo baseURL
})