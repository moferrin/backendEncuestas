const express = require("express");
const router = express.Router();

const encuesta2 = require("../controllers/encuesta2.controller");

router.get("/", encuesta2.getEncuesta2s);

router.post("/", encuesta2.createEncuesta2);

router.get("/:id", encuesta2.getEncuesta2);

router.put("/:id", encuesta2.editEncuesta2);

router.delete("/:id", encuesta2.deleteEncuesta2);

module.exports = router;