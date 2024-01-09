const Router=require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check) //(req, res)=>{res.json({message: 'USER ROUTER WORKING'})}
router.put('/:id',userController.update)
router.delete('/:id',userController.delete)

module.exports = router