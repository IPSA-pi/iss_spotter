const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

const exampleCoords = {latitude: '49.27670', longitude: '-123.13000'};

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  }

  console.log('It worked! Returned flyover times: ', passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn"t work ', error);
//     return;
//   }
//   console.log('It worked, Returned IP: ', ip);
//   // fetchCoordsByIP(ip);
// });

// fetchCoordsByIP('24.68.230.70', (error, geo) => {
//   if (error) {
//     console.log('there was an error: ', error);
//   }
//   console.log('It worked, Returned Geo Coordinates: ', geo);
// });
