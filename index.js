const { nextISSTimesForMyLocation } = require('./iss');

const dateFormatter = (date) => {
  return new Date(date).toString();
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  return passTimes.map((pass) => {
    const formattedDate = dateFormatter(pass.risetime);
    const passMessage = `Next pass at ${formattedDate} for ${pass.duration} seconds`;
    console.log(passMessage);
    return;
  });
});

