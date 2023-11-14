const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  return passTimes.map((pass) => {
    console.log(console.log("pass", pass));
  });
});

