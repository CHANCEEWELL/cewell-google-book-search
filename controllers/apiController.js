const axios = require('axios').default;
const mongoose = require('mongoose');
const { Books } = require('../models');

module.exports = {
    apiGet: async function (req, res) {
        try {
            const savedBooks = await Books.find({});
            if (savedBooks) {
                res.status(200).json(savedBooks);
            } else {
                res.status(404).json({ message: 'no books found' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    apiPost: async function (req, res) {
        try {
            const book = req.body;
            const savedBook = await Books.create(book);
            if (savedBook) {
                res.status(200).json(savedBook);
            } else {
                res.status(404).json({ message: 'book not saved' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    apiDelete: async function (req, res) {
        try {
            const bookId = req.params.id;
            const deletedBook = await Books.deleteOne({ _id: bookId });
            if (deletedBook) {
                res.status(200).json(deletedBook);
            } else {
                res.status(404).json({ message: 'book not deleted' });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}