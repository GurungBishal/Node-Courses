const https = require("https");

const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaXRhY2hpZ3VydW5nMDAiLCJhIjoiY2tpcmFscmFxMDh6MDJxc2MydTVlNngxNCJ9.JF6Q7H7pAg20yvZXwhZcjg&limit=1";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
