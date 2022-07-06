const express = require('express');
const ActeurController = require('./controllers/ActeurController');
const GenreController = require('./controllers/GenreController')

const router = express.Router();

/*router.get('/actor', ActeurController.acteur_list);
router.get('/actor/:id', ActeurController.acteur_get);
router.post('/actor', ActeurController.acteur_create);
router.put('/actor/:id', ActeurController.acteur_update);
router.delete('/actor/:id', ActeurController.acteur_delete);*/

router.get('/genre', GenreController.list);
router.post('/genre', GenreController.create);
/*router.delete('/genre/:id', GenreController.delete);*/

module.exports = router;
