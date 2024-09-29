const mongoose = require("mongoose");

const schema = mongoose.schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const ShoppingCartModel =
  mongoose.models.ShoppingCart || mongoose.model("ShoppingCart", schema);

export default ShoppingCartModel;
