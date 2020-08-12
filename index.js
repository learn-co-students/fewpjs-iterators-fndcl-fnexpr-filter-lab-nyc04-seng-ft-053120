// Code your solution here

function findMatching(drivers, string) {
  let newArr = drivers.filter((driver) => { return driver.toLowerCase() === string.toLowerCase() })
  return newArr
}

function fuzzyMatch(drivers, string) {
  let newArr = drivers.filter((driver) => { return driver.startsWith(string) })

  return newArr
}

function matchName(drivers, string) {
  let newArr = drivers.filter((driver) => { return driver.name === string })

  return newArr
}