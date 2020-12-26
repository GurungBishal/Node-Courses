const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const data = dataBuffer.toString();
const parseData = JSON.parse(data);
console.log(parseData);

parseData.name = "Bishal";
parseData.age = 30;

const newdata = JSON.stringify(parseData);
fs.writeFileSync("1-json.json", newdata);
console.log(newdata);
