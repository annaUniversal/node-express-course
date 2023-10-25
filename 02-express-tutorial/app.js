console.log("Express Tutorial");
const express = require("express");
const path = require("path");
const app = express();
const { products, people } = require("./data");
const { time } = require("console");
const logger = require("./logger");
const peopleRouter = require("./routes/people.js");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//routers
app.use("/", logger); // For all routs
app.use("/api/v1/people", peopleRouter);

app.get("/api/v1/test", (req, res) => {
  //res.status(200).json({ message: "It worked!"})
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  console.log("Get request for Products");
  const newProduct = products.map((product) => {
    return { ...product };
  });
  res.json(newProduct);
});

app.get("/api/v1/products/:productID", (req, res) => {
  console.log(req.params);
  const idToFind = parseInt(req.params.productID);
  const foundProduct = products.find((product) => product.id === idToFind);
  if (!foundProduct) {
    return res.json({ message: "That product was not found." });
  }
  return res.json(foundProduct);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit, priceP } = req.query;
  let searchItems = [...products];

  if (search) {
    searchItems = searchItems.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    searchItems = searchItems.slice(0, Number(limit));
  }

  if (priceP) {
    searchItems = searchItems.filter((product) => {
      return product.price < Number(priceP);
    });
  }
  return res.status(200).json(searchItems);
});

// app.get("/api/v1/people", (req, res) => {
//     console.log("Get request for People");
//     // const newPerson = people.map((person) => {
//     //   return { ...person };
//     // });
//     res.status(200).json({data:people});
//   });

// //adding person
// app.post("/api/v1/people", (req, res) => {
//     //const {name} = req.body;
//     if (!req.body.name){
//         return res.status(400)
//         .json({ success: false, message: "Please provide a name" });
//     }
//     people.push({ id: people.length + 1, name: req.body.name });
//     res.status(201).json({ success: true, name: req.body.name });
//   });

app.all("*", (req, res) => {
  res.status(404).send("<h1>The page is not found</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
