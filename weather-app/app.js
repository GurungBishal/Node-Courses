const geoCode = require("./utils/geoCode");
const foreCast = require("./utils/foreCast");

// // const url =
// //   "http://api.weatherstack.com/current?access_key=8ff19eda6fd5703e1f5c75166a76323b&query=New%20York";

// // request({ url: url, json: true }, (error, response) => {
// //   if (error) {
// //     console.log("Unable to connect to the internet");
// //   } else if (response.body.error) {
// //     console.log("Unable to find the location");
// //   } else {
// //     console.log(
// //       `${response.body.current.weather_descriptions}.It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip} % chance of rain`
// //     );
// //   }
// // });

const address = process.argv[2];

if (address) {
  geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    foreCast(latitude, longitude, (error, foreCastData) => {
      if (error) {
        return console.log("Error", error);
      }
      console.log(location);
      console.log(foreCastData);
    });
  });
} else {
  console.log("Enter a location");
}
