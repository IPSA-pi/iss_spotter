/* eslint-disable max-len */
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

const fetchCoordsByIP = function(ip, callback) {
  const url = `http://ipwho.is/${ip}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);

    if (!data.success) {
      const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(message), null);
      return;
    }
    const coors = {};
    coors.latitude = data.latitude;
    coors.longitude = data.longitude;
    callback(null, coors);
  });
};

module.exports = {fetchMyIP, fetchCoordsByIP};
