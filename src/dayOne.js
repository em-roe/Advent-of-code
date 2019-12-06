const excecute = input => {
  const totalFuel = parse(input);

  console.log(totalFuel);
};

const parse = string =>
  string
    .split("\n")
    .map(x => parseInt(x, 10))
    .map(mass => Math.floor(mass / 3) - 2)
    .reduce(addThemUp);

const addThemUp = (accumulator, currentValue) => accumulator + currentValue;

module.exports = excecute;
