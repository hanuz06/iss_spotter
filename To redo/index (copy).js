const {
  fetchMyIP
} = require('./iss');
const {
  fetchCoordsByIP
} = require('./iss');
const {
  fetchISSFlyOverTimes
} = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    console.log("IP: ", null);
    return ;
  }

  console.log('Error :', null);
  console.log('It worked! Returned IP:', ip);
  console.log('===============================');
});


fetchCoordsByIP('184.68.214.222', (error, coords) => {

  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('Returned coords: ', coords);
});

// { latitude: '51.12640', longitude: '-114.14190' }
fetchISSFlyOverTimes({ latitude: '51.12640', longitude: '-114.14190' }, (error, flyTime) => {

  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('ISS passing duration and time: ', flyTime);
});

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});