const router = require("express").Router();
const Piece = require("../model/Piece");
const moment = require("moment");

moment.locale("vi");

router.get("/", (req, res) => {
  if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
    // console.log("Case 1");
    Piece.find().exec((error, data) => {
      if (error) return res.status(500).json(error);
      else
        return res.status(200).json({
          counts: data.length,
          data: data.map((item) => {
            return {
              text: item.text,
              meaning: item.meaning,
              id: item._id,
              meaning_counts: item.meaning.length,
              created_at: moment(item.created_at).format("LLLL"),
              updated_at: moment(item.update_at).format("LLLL"),
              chapter: item.first_appear,
            };
          }),
        });
    });
  }

  if (req.query.chapter && !req.query.text) {
    // console.log("Case 2");
    Piece.find({ first_appear: req.query.chapter }).exec((error, data) => {
      if (error) return res.status(500).json(error);
      else
        return res.status(200).json({
          counts: data.length,
          data: data.map((item) => {
            return {
              text: item.text,
              meaning: item.meaning,
              id: item._id,
              meaning_counts: item.meaning.length,
              created_at: moment(item.created_at).format("LLLL"),
              updated_at: moment(item.update_at).format("LLLL"),
              chapter: item.first_appear,
            };
          }),
        });
    });
  }
  if (req.query.text && !req.query.chapter) {
    // console.log("Case 3");
    Piece.find({ text: { $regex: req.query.text, $options: "i" } }).exec(
      (error, data) => {
        if (error) return res.status(500).json(error);
        else
          return res.status(200).json({
            counts: data.length,
            data: data.map((item) => {
              return {
                text: item.text,
                meaning: item.meaning,
                id: item._id,
                meaning_counts: item.meaning.length,
                created_at: moment(item.created_at).format("LLLL"),
                updated_at: moment(item.update_at).format("LLLL"),
                chapter: item.first_appear,
              };
            }),
          });
      }
    );
  }
  if (req.query.text && req.query.chapter) {
    // console.log("Case 4");
    console.log(req.query.text);
    console.log(req.query.chapter);
    Piece.find({
      text: { $regex: req.query.text, $options: "i" },
      first_appear: req.query.chapter,
    }).exec((error, data) => {
      if (error) return res.status(500).json(error);
      else
        return res.status(200).json({
          counts: data.length,
          data: data.map((item) => {
            return {
              text: item.text,
              meaning: item.meaning,
              id: item._id,
              meaning_counts: item.meaning.length,
              created_at: moment(item.created_at).format("LLLL"),
              updated_at: moment(item.update_at).format("LLLL"),
              chapter: item.first_appear,
            };
          }),
        });
    });
  }
});

router.post("/", async (req, res) => {
  let isValid = await Piece.findOne({ text: req.body.text });
  if (!isValid) {
    let data = new Piece();
    data.text = req.body.text;
    data.meaning.push(req.body.meaning);
    data.first_appear = req.body.first_appear;

    data.save((error, response) => {
      if (error) return res.status(500).json(error);
      else return res.status(201).json({ response });
    });
  } else {
    isValid.meaning.push(req.body.meaning);
    isValid.save((error, response) => {
      if (error) return res.status(500).json(error);
      else
        return res
          .status(200)
          .json({ message: "We have updated the newer meaning", response });
    });
  }
});

module.exports = router;
