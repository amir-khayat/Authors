const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/author', AuthorController.findAllAuthors);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.post('/api/author/create', AuthorController.createAuthor);
    app.put('/api/author/update/:id', AuthorController.updateAuthor);
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);
}