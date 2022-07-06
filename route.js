const express = require('express');
const ActeurControllers = require('../controllers/ActeurControllers');

const router = express.Router();

router.get('/', ActeurControllers.acteur_list);
router.get('/:id', ActeurControllers.acteur_get);
router.post('/', ActeurControllers.acteur_create);
router.put('/:id', ActeurControllers.acteur_update);
router.delete('/:id', ActeurControllers.acteur_delete);

module.exports = router;
