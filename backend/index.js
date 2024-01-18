const express = require("express");
const { todoss } = require("./db");

const app = express();

const { createtodo, updatetodo } = require("./types");

app.use(express.json());
const cors = require("cors");

app.use(cors({}));

app.post("/todos", async function (req, res) {
  const createpayload = req.body;
  const parsedload = createtodo.safeParse(createpayload);
  if (!parsedload) {
    res.status(411).json({
      msg: "you have sent wrong inputs",
    });
    return;
  }
  await todoss.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const data = await todoss.find({});
  res.json({ data });
});

app.put("/completed", async function (req, res) {
  const createpayload = req.body;
  const parseload = updatetodo.safeParse(createpayload);
  if (!parseload) {
    res.status(411).json({
      msg: "please send correct credientials",
    });
  }

  const newupdate = await todoss.update(
    {
      _id: req.body.id,
    },

    {
      completed: true,
    }
  );

  res.json({
    msg: "updated successfully",
  });
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`server listening on ${PORT}`);
});
