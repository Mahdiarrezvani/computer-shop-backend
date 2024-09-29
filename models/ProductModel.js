const mongoose = require("mongoose");

const schema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  brand: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  Features: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  Discount: {
    type: Number,
    required: true,
  },
  introduction: {
    type: Number,
    required: true,
  },
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", schema);

export default ProductModel;
