import axios from 'axios';

let { REACT_APP_PUBLIC_API_URL } = process.env;

const apiUrl = REACT_APP_PUBLIC_API_URL;

console.log(apiUrl)

const domainurl = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default domainurl;