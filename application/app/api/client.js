import axios from "axios";

const Client = axios.create({
    baseUrl: 'http://192.168.100.142:8000/api'
});

export default Client;