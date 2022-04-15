const mongoose = require("mongoose");

var mongoUrl = `mongodb+srv://guru:Guru7999@cluster0.gmcd8.mongodb.net/mern-pixxa`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongodb connection successfull");
});
db.on("error", () => {
  console.log("MongoDb connection faild");
});
