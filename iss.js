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
  request("https://api64.ipify.org?format=json", (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ipData = JSON.parse(body);
    return callback(null, ipData.ip);
  });
};

/**
 * @function fetchCoordsByIp makes a single API request to fetch the user's location based on their IP address
 * @param ip an IP address presented as a string
 * @param callback to pass back an error or the geo-coordinates
 * @returns (via callback):
 *  - an error (if any)
 *  - the geo-coordinates of the user (null if error)
 * @link for API ipwhois http://ipwho.is/[IP address]
 */

const fetchCoordsByIp = (ip, callback) => {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ipLocationInformation = JSON.parse(body);


    if (!ipLocationInformation.success) {
      const msg = `Failed when fetching IP address.
      Response: ${ipLocationInformation.message}`;
      callback(Error(msg), null);
      return;
    }

    const coordinates = {
      latitude: ipLocationInformation.latitude,
      longitude: ipLocationInformation.longitude
    };

    return callback(null, coordinates);
  });
};

module.exports = { fetchMyIp, fetchCoordsByIp };