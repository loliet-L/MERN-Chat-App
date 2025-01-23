import { Router} from 'express';
import {body} from 'express-validator';
import * as projectController from '../controllers/project.controller.js';
import * as authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.post('/create',authMiddleware.authUser,
    body('name').isString().withMessage('name is required'),
    projectController.createProject);

router.get('/all',authMiddleware.authUser,projectController.getAllProjects);

router.put('/add-user',authMiddleware.authUser,
    body('projectId').isString().withMessage('projectId is required'),
    body('users').isArray({ min: 1 }).withMessage('users is required and must be an array')
    .isArray({ each: { isString: true } }).withMessage('each user must be a string')
    ,projectController.addUserToProject);

export default router;



