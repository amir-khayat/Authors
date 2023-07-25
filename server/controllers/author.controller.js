// Import
const Author = require("../models/author.model");

// Create
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

// Read all
module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err));
}

// Read one
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

// Update
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

// Delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}