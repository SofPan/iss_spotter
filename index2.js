const { fetchMyIp, fetchCoordsByIp } = require('./iss_promised');

fetchMyIp()
  .then(fetchCoordsByIp)
  .then(body => console.log(body));