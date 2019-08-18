import axios from 'axios';

const instance = axios.create({
    baseURL: "http://vikingnotes-eb-server.eu-north-1.elasticbeanstalk.com"
});

export default instance;
