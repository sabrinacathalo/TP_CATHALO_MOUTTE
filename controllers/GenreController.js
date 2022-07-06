const db = require('../database');
const genreRepository = require('../repository/GenreRepository');

exports.list = (req, res) => {
    const repo = new genreRepository(db);
    repo.list()
        .then((result) => {
            res.json({
                success: true,
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};