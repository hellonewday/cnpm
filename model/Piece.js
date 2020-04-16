const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceSchema = new Schema(
  {
    text: String,
    meaning: [
      {
        type: String,
        min: 20,
      },
    ],
    first_appear: Number,
  },
  {
    timestamps: {
      createdAt: "create_at",
      updatedAt: "update_at",
    },
  }
);

module.exports = mongoose.model("Piece", PieceSchema);
