const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getIqResults);
router.post('/', controller.addIqResults);
router.get('/:iq_results_id', controller.getIqResultsById);
router.put("/:iq_results_id", controller.updateIqResults);
router.delete("/:iq_results_id", controller.deleteIqResults);

module.exports = router;