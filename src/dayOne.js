const excecute = input => {
  const totalFuel = parse(input);

  console.log(totalFuel);
};

const parse = string =>
  string
    .split("\n")
    .map(x => parseInt(x, 10))
    .map(calculateFuelRequirement)
    .reduce(addThemUp);

const addThemUp = (accumulator, currentValue) => accumulator + currentValue;

calculateFuelRequirement = mass => {
  let calcFuel = Math.floor(mass / 3) - 2;
  if (calcFuel > 0) {
    calcFuel += calculateFuelRequirement(calcFuel);
  }
  return calcFuel < 0 ? 0 : calcFuel;
};

module.exports = excecute;
