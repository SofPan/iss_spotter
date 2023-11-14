const { fetchMyIp, fetchCoordsByIp, issFlyoverTimes } = require('./iss');

fetchMyIp((error, ip) => {
  if (error) {
    return error;
  }

  return fetchCoordsByIp(ip, (error, userLocation) => {
    if (error) {
      return error;
    }
    return issFlyoverTimes(userLocation, (error, data) => {
      if (error) {
        console.log(error);
        return error;
      }
      console.log("ISS data", data);
      return data;
    });
  });
});

