const Router=require('express')
const articleController = require('../controllers/articleController')
const router = new Router()

router.post('/', articleController.create)
router.get('/', articleController.getAll)
router.get('/:id',articleController.getOne)
router.put('/:id',articleController.update)
router.delete('/:id',articleController.delete)


module.exports = router