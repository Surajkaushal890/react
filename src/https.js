import axios from "axios";
const http = axios.create({
    baseURL: "https://citytreebackend.satlujwebsolution.com/",
    headers: {
        'Content-Type': 'application/json',
    }
});

export default http;
