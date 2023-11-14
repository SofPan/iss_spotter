const request = require('request-promise-native');

const fetchMyIp = () => {
  return request("https://api64.ipify.org?format=json");
};

const fetchCoordsByIp = (ip) => {
  return request(`http://ipwho.is/${ip}`);
};

module.exports = { fetchMyIp };