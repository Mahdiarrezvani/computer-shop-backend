const mongoose = require("mongoose");

const schema = mongoose.schema({
  title: {
    required: true,
    type: String,
  },
  img: {
    required: true,
    type: String,
  },
  labels: {
    required: true,
    type: Array,
  },
  description: {
    required: true,
    type: String,
  },
});

const ArticleModel =
  mongoose.models.Article || mongoose.model("Article", schema);

export default ArticleModel;
