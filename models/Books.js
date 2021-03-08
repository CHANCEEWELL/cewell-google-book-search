const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String,
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;