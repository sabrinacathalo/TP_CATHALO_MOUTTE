const express = require('express');
const ActorController = require('./controllers/ActorController');
const GenreController = require('./controllers/GenreController');
const FilmController = require('./controllers/FilmController');

const router = express.Router();

router.get('/actor', ActorController.list);
router.get('/actor/:id', ActorController.get);
router.post('/actor', ActorController.create);
router.put('/actor/:id', ActorController.update);
router.delete('/actor/:id', ActorController.delete);

router.get('/genre', GenreController.list);
router.post('/genre', GenreController.create);
router.delete('/genre/:id', GenreController.delete);

router.get('/film', FilmController.list);
router.get('/film/:id', FilmController.get);
router.post('/film', FilmController.create);
router.put('/film/:id', FilmController.update);
router.delete('/film/:id', FilmController.delete);

module.exports = router;
