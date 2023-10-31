const express = require("express");
const router = express.Router();

//const { people } = require("../data");
const {
  addPerson,
  getPeople,
  findPerson,
  updatePerson,
  deletePerson
} = require("../controllers/people.js");

router.get("/", getPeople);
router.post("/", addPerson);
router.get("/:personid", findPerson);
router.put("/:personid", updatePerson);
router.delete("/:personid", deletePerson);

module.exports = router;
