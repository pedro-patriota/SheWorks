import Axios from "axios"
export default Axios.create({
    baseURL: "http://172.20.4.249:3001/", // Tive que colocar meu ip publico aqui
    timeout: 10000,
})