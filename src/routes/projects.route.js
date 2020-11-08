import { Router } from 'express';
const router = Router();

import { createProject, deleteProject, getOneProject, getProjects, updateProject } from '../controllers/project.controller'

router.post('/', createProject);

router.get('/', getProjects);

router.get('/:id', getOneProject);

router.delete('/:id', deleteProject);

router.put('/:id', updateProject);


export default router; 
