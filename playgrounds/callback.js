const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, "This is my result");
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
