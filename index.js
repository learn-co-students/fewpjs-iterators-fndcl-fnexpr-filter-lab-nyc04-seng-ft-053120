// Write a Function To Case-insensitively Match strings
// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

const findMatching = (drivers, query) => {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === query.toLowerCase();
  });
};

// Write a Function To Partially Match Substrings
// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

const fuzzyMatch = (drivers, query) => {
  return drivers.filter((driver) => {
    return driver.slice(0, query.length).toLowerCase() === query.toLowerCase();
  });
};

// Write a Function To Match object Values To a Provided string
// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

const matchName = (drivers, query) => {
  return drivers.filter((driver) => {
    return driver.name.toLowerCase() === query.toLowerCase();
  });
};
