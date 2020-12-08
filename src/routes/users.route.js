import { Router } from 'express';
const router = Router();

import { createUsers } from '../controllers/users.controller.js';

router.post('/', createUsers);

export default router;