const express = require("express");
const app = express();
const tasks = require("./routs/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.json()); //to parse the incoming request body in middleware

//routs
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks); //get all tasks
app.post("/api/v1/tasks", tasks); //create a new tast

//update tasks
app.get("/api/v1/tasks/:id", (req, res) => {});

PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
