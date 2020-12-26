const e = require("express");
const mongoose = require("../db/mongoose");

const Task = require("../models/task");

// Task.findByIdAndDelete("5fe4863ee430970a08f9f504")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(error);
//   });

const findAndDelete = async (_id) => {
  const task = await Task.findByIdAndDelete(_id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

findAndDelete("5fe5711e11540326f4b1611a")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
