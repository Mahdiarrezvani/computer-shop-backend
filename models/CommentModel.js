const mongoose = require("mongoose");

const schema = mongoose.schema({
  user: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  product: {
    required: true,
    type: mongoose.Types.ObjectId,
  },
  description: {
    required: true,
    type: String,
  },
  isShow: {
    required: true,
    type: Boolean,
  },
});

schema.virtual("answers", {
  ref: "Answer",
  localField: "_id",
  foreignField: "comment",
});

const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", schema);

export default CommentModel;
