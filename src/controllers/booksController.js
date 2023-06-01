const BooksModel = require("../models/booksModel");

// get books
module.exports.getBook = async (req, res) => {
  try {
    const result = await BooksModel.find({});
    if (result) {
      res.status(200).json({
        status: "success",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      msg: error.message,
    });
  }
};
// create book
module.exports.createBook = async (req, res) => {
  try {
    const userData = req.body;

    const doc = new BooksModel(userData);
    const result = await doc.save();

    res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      msg: error.message,
    });
  }
};
module.exports.singleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BooksModel.findById(id);
    if (result) {
      res.status(200).json({
        status: "success",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      msg: error.message,
    });
  }
};
module.exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await BooksModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (result) {
      res.status(200).json({
        status: "successfully updated",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      msg: error.message,
    });
  }
};
module.exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BooksModel.findByIdAndDelete(id);
    if (result) {
      res.status(200).json({
        status: "successfully deleted",
      });
    } else {
      res.status(400).json({
        status: "fail",
        msg: "id not found in database",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      msg: error.message,
    });
  }
};
