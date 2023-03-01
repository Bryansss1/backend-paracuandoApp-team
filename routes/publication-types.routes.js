const express = require("express");
const { getAllpublicationTypes, getOnepublicationtype } = require("../controllers/publication-types.controller");
const router = express.Router();

router.get("/",getAllpublicationTypes)
router.get("/:id",getOnepublicationtype)

module.exports=router