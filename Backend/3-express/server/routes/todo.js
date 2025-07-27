import e from 'express'
import { createTodo , fetchTodo ,updateTodo,deleteTodo} from '../controller/todo.js'
import {isAuthenicated} from '../middleware/isAuthentication.js'

const router=e.Router()
router.route('/create').post(isAuthenicated,createTodo)
router.route('/fetch').get(isAuthenicated,fetchTodo)
router.route('/update/:id').put(isAuthenicated,updateTodo)
router.route('/delete/:id').delete(isAuthenicated,deleteTodo)

export default router