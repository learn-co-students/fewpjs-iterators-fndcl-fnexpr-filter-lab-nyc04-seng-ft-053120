// Code your solution here

function findMatching(driverArray, string){
    return driverArray.filter((name) => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    let letters = string.split("")

    return drivers.filter((driver) => (driver[0] === letters[0] || driver[0] === letters[1]))
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)
 } 