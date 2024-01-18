const mongoose = require("mongoose");
// const { zod } = require("zod");

// mongoose.connect(
//   "mongodb+srv://bkashish077:ashish077@cluster0.ral2is9.mongodb.net/todos"
// );

mongoose.connect(
  "mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos"
);

const todoschema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todoss = mongoose.model("todoss", todoschema);

module.exports = {
  todoss,
};
