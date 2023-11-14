const request = require('request');

/**
 * @function fetchMyIp makes a single API request to fetch the user's IP address.
 * @param callback to pass back an error or the IP string
 * @returns (via callback):
 *  - an error (if any)
 *  - The IP address if available (null if error)
 * URL for ipify IPV4 JSON format IP address
 * @link https://api64.ipify.org?format=json
 */

const fetchMyIp = (callback) => {
  request("https://api64.ipify.org?format=json", (error, status, data) => {
    const ipData = JSON.parse(data);
    return callback(error, ipData.ip);
  });
};

module.exports = { fetchMyIp };