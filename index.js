const { fetchMyIp, fetchCoordsByIp, issFlyoverTimes } = require('./iss');

fetchMyIp((error, ip) => {
  if (error) {
    console.log("IP ERROR:", error.message);
    return;
  }

  return fetchCoordsByIp(ip, (error, userLocation) => {
    if (error) {
      console.log("FETCH COORDINATES ERROR:", error.message);
      return;
    }
    return issFlyoverTimes(userLocation, (error, data) => {
      if (error) {
        console.log("ISS LOCATION ERROR:", error.message);
        return;
      }
      return data;
    });
  });
});

