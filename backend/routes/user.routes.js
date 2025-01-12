import { Router } from "express";
import * as UserController from "../controllers/user.controlller.js";
import { body } from "express-validator";
import * as authMiddleware from "../middleware/auth.middleware.js";


const router = Router();


router.post('/register',
    body('email').isEmail().withMessage('Email must be a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    UserController.createUserController);
    
router.post('/login',
    body('email').isEmail().withMessage('Email must be a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters'),
    UserController.loginController);

router.get('/profile',authMiddleware.authUser,UserController.profileController);

router.get('/logout',authMiddleware.authUser,UserController.logoutController);


export default router;