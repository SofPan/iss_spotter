const dateFormatter = (date) => {
  return new Date(date).toString();
};

const printPassTimes = (passArray) => {
  return passArray.map((pass) => {
    const formattedDate = dateFormatter(pass.risetime);
    const passMessage = `Next pass at ${formattedDate} for ${pass.duration} seconds`;
    console.log(passMessage);
    return;
  });
};

module.exports = { printPassTimes };