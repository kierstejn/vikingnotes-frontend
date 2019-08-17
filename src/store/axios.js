import axios from 'axios';

const instance = axios.create({
    baseURL: "vikingnotes-eb-server.eu-north-1.elasticbeanstalk.com"
});

export default instance;
