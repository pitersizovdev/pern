const Router=require('express')
const router = new Router()
const articleRouter = require('./articleRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const coinRouter = require('./coinRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/coin', coinRouter)
router.use('/article', articleRouter)

module.exports = router