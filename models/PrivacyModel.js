const mongoose = require("mongoose");

const schema = mongoose.schema({
  awnser: {
    required: true,
    type: String,
  },
  question: {
    required: true,
    type: String,
  },
});

const PrivacyModel =
  mongoose.models.Privacy || mongoose.model("Privacy", schema);

export default PrivacyModel;
