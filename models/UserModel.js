const mongoose = require("mongoose");

const schema = mongoose.schema({
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone_number: {
    required: true,
    type: String,
  },
});

schema.virtual("cart", {
  ref: "ShoppingCart",
  localField: "_id",
  foreignField: "user",
});

const UserModel = mongoose.models.User || mongoose.model("User", schema);

export default UserModel;
