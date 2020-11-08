import { Router } from 'express';
import { deleteProject } from '../controllers/project.controller';
const router = Router();

import { createTask, deleteTask, getOneTask, getOneTaskByProject, getTasks } from "../controllers/task.controller";

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.get('/project/:project_id', getOneTaskByProject)

export default router; 
