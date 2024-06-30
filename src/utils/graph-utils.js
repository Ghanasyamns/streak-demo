export function generateRandomData(numPoints) {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    data.push({
      x: i,
      y: Math.floor(Math.random() * 100),
    });
  }
  return data;
}
export function generateRandomCount() {
  return Math.floor(Math.random() * 10000);
}

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
