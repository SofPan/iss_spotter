const { nextISSTimesForMyLocation } = require('./iss');

const dateFormatter = (date) => {

};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  return passTimes.map((pass) => {
    console.log(console.log("pass", pass));
  });
});

