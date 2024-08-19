const express = require("express");
const app = express();
const port = 3800;
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "index.html");

require("./src/db/conn");
const foodItems = require("./src/model/schema");

app.get("/", (req, res) => {
  // res.send("<h1>Welcome to project creation</h1>");
  res.sendFile(filePath);
});

app.get("/foodItems", async (req, res) => {
  try {
    const allFoodItems = await foodItems.find({});
    res.status(201).json(allFoodItems);
  } catch (e) {
    console.log(e);
  }
});

app.post("/allFoodItemAPIs", async (req, res) => {
  const foodItemDetails = await foodItems.create(req.body);
  res.status(200).json({ foodItemDetails });
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
