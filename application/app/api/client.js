import axios from "axios";

const Client = axios.create({
    baseURL: 'http://192.168.100.142:8000'

    // for emulator: 'http://192.168.100.142:8000' 
    // for device: 'https://09c3-41-80-112-22.ngrok-free.app'

});

export default Client;