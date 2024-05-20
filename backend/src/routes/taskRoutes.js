import express from 'express'
import { addTask, deleteTask, getAllTask, updateTask } from '../controller/taskController.js'

const router = express.Router()



router.get('/',getAllTask);


router.post('/',addTask)

router.put('/:id',updateTask)


router.delete('/:id',deleteTask)


export default router