const generateFlights = () => {
  const FLIGHTS = [];

  for (let from = 1; from <= 50; from++) {
    for (let to = 1; to <= 50; to++) {
      if (from !== to) {
        const price = Math.floor(Math.random() * (1500 - 250 + 1)) + 250;
        FLIGHTS.push({ from, to, price });
      }
    }
  }

  return FLIGHTS;
};

const FLIGHTS = generateFlights();
export default FLIGHTS;
