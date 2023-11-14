const { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss_promised');

fetchMyIp()
  .then(fetchCoordsByIp)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));