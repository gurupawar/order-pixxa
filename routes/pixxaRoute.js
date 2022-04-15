const express = require("express");
const router = express.Router();
const Pixxa = require("../models/pixxaModel");

router.get("/getallpixxas", async (req, res) => {
  try {
    const pixxas = await Pixxa.find({});
    res.send(pixxas);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
