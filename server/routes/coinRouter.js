const Router=require('express')
const coinController = require('../controllers/coinController')
const router = new Router()

router.post('/', coinController.create)
router.get('/', coinController.getAll)
router.delete('/:id',coinController.delete)

module.exports = router