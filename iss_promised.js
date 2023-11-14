const request = require('request-promise-native');

const fetchMyIp = () => {
  return request("https://api64.ipify.org?format=json");
};

const fetchCoordsByIp = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = (body) => {
  const coordinates = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coordinates.latitude}&lon=${coordinates.longitude}`);
};

module.exports = { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes };