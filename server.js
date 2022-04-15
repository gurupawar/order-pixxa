const express = require("express");
const pixxas = require("./models/pixxaModel");
const db = require("./db");
const app = express();

app.use(express.json());

const pixxasRoute = require("./routes/pixxaRoute");

app.use("/api/pixxas/", pixxasRoute);
app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

app.get("/getpixxas", (req, res) => {
  pixxas.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});
const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
