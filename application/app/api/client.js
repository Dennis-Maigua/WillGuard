import axios from "axios";

const Client = axios.create({
    baseURL: 'https://e6fa-41-80-112-22.ngrok-free.app'
});

export default Client;