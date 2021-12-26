const printWarning = (message) => {
  if (console) {
    console.warn(message);
  }
};
const printError = (message) => {
  if (console) {
    console.error(message);
  }
};
const printDebug = (message) => {
  if (console) {
    console.debug(message);
  }
};

export { printError as a, printDebug as b, printWarning as p };
