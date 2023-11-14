const { fetchMyIp, fetchCoordsByIp } = require('./iss');

fetchMyIp((error, ip) => {
  if (error) {
    return error;
  }

  return fetchCoordsByIp(ip, (error, userLocation) => {
    if (error) {
      console.log("There was an error:", error);
      return error;
    }

    console.log("the data:", userLocation);
    return userLocation;
  });
});

