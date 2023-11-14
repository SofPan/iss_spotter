const { fetchMyIp, fetchCoordsByIp, issFlyoverTimes } = require('./iss');

fetchMyIp((error, ip) => {
  if (error) {
    return error;
  }

  return fetchCoordsByIp(ip, (error, userLocation) => {
    if (error) {
      return error;
    }
    return issFlyoverTimes(userLocation);
  });
});

