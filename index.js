const { nextISSTimesForMyLocation } = require('./iss');

const dateFormatter = (date) => {
  return new Date(date);
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  return passTimes.map((pass) => {
    const formattedDate = dateFormatter(pass.risetime);
    console.log("pass date:", formattedDate);
  });
});

