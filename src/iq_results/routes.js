const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getIqResults);
router.post('/survey', controller.addIqResults);
router.get('/:id', controller.getIqResultsById);
router.put('/:id', controller.updateIqResults);
router.delete('/:id', controller.deleteIqResults);

module.exports = router;