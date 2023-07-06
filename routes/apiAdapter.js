const axios = require('axios')
const {TIMEOUT} = process.env;

module.exports = (baseURl) => {
    return axios.create({
        baseURL: baseURl,
        timeout: parseInt(TIMEOUT)
    });
}