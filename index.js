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

    const locationObj = {
      latitude: userLocation.latitude,
      longitude: userLocation.longitude
    };
    console.log("lat/lon", locationObj);
    return locationObj;
  });
});

