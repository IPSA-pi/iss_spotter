const request = require('request');
const ipURL = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  request(ipURL, (error, response, body) => {
    const statusCode = response.statusCode;
    if (error) {
      return callback(error, null);
    }
    if (statusCode !== 200) {
      // eslint-disable-next-line max-len
      const msg = `Status Code ${statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = {fetchMyIP};
