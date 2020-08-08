function findMatching(drivers, target) {
  target = target.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase() == target);
}

function fuzzyMatch(drivers, target) {
  target = target[0]
  return drivers.filter(driver => driver[0] == target);
}

function matchName(drivers, target) {
  return drivers.filter(driver => driver.name == target);
}