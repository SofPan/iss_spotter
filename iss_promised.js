const request = require('request-promise-native');

const fetchMyIp = () => {
  return request("https://api64.ipify.org?format=json");
};

module.exports = { fetchMyIp };