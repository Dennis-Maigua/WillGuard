import axios from "axios";

const Client = axios.create({
    baseURL: 'https://629a-2c0f-fe38-2406-6b0c-ac41-1d79-3d49-a812.ngrok-free.app'

    // for emulator: 'http://192.168.100.142:8000' 
    // for device: 'https://09c3-41-80-112-22.ngrok-free.app'

});

export default Client;