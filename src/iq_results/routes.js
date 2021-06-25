const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getIqResults);
router.get("/:iq_results_id", controller.getIqResultsById);
router.post("/", comtroller.addIqResults);

module.exports = router;