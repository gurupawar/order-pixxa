const mongoose = require("mongoose");

const pixxaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    variants: [],
    prices: [],
    image: { type: String, require },
    description: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const pixxaModel = mongoose.model("pixxas", pixxaSchema);

module.exports = pixxaModel;
