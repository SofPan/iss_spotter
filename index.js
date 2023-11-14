const { fetchMyIp, fetchCoordsByIp } = require('./iss');

const ipAddress = fetchMyIp((error, ip) => {
  if (error) {
    return error;
  }

  return ip;
});

fetchCoordsByIp(ipAddress, (error, userLocation) => {
  if (error) {
    console.log("There was an error:", error);
    return error;
  }

  console.log("the data:", userLocation);
  return userLocation;
});