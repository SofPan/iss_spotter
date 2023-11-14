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
 * @link for API ipwhois http://ipwho.is/${IP address}
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

    const { latitude, longitude } = ipLocationInformation;

    return callback(null, { latitude, longitude });
  });
};

/**
 * @function issFlyoverTimes makes a single API request to fetch the ISS Flyover Times based on user's geo-coordinates
 * @param coordinates an object containing latitude and longitude coordinates
 * @param callback to pass back any errors or the array of the resulting data
 * @returns (via callback):
 *  - an error (if any)
 *  - The fly over times as an array of objects
 * @link for API https://iss-flyover.herokuapp.com/json/?lat=${YOUR_LAT_INPUT_HERE}&lon=${YOUR_LON_INPUT_HERE}
 */

const issFlyoverTimes = (coordinates, callback) => {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coordinates.latitude}&lon=${coordinates}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // If body is not JSON, use text as error message
    if (!body.includes("{")) {
      return callback(Error(body), null);
    }
    const issData = JSON.parse(body);
    return callback(null, issData);
  });
};

module.exports = { fetchMyIp, fetchCoordsByIp, issFlyoverTimes };