const express = require("express");
const app = express();
const tasks = require("./routs/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json()); //to parse the incoming request body in middleware

//routs
app.use("/api/v1/tasks", tasks); //get all tasks
app.post("/api/v1/tasks", tasks); //create a new tast

app.use(notFound);
app.use(errorHandlerMiddleware);

//update tasks
app.get("/api/v1/tasks/:id", (req, res) => {});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MANGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
