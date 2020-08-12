// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter((match) => match.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((match) => match.toLowerCase().indexOf(string.toLowerCase()) === 0);
}

function matchName(drivers, name) {
  return drivers.filter((object) => object.name === name);
}
