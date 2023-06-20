const {fetchMyIP, fetchCoordsByIP} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn"t work ', error);
    return;
  }
  console.log('It worked, Returned IP: ', ip);
  // fetchCoordsByIP(ip);
});

fetchCoordsByIP('24.68.230.70', (error, geo) => {
  if (error) {
    console.log('there was an error: ', error);
  }
  console.log('It worked, Returned Geo Coordinates: ', geo);
});
