import projectModel from "../models/project.model.js";
import * as projectServices from "../services/project.service.js"; 
import {validationResult} from 'express-validator';
import userModel from "../models/user.model.js";


export const createProject = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {

    const {name} = req.body;
    const loggedInUser = await userModel.findOne({email: req.user.email});
    const userId = loggedInUser._id;

    const newProject = await projectServices.createProject({name: name, userId: userId});
    return res.status(201).json(newProject);
    
    } catch (error) {console.log(error);
        return res.status(400).json({message: error.message});
    }

};


export const getAllProjects = async (req, res) => {
    try {
        const loggedInUser = await userModel.findOne({email: req.user.email});
        const projects = await projectServices.getAllProjectsByUserId({userId: loggedInUser._id});
        return res.status(200).json({projects: projects});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
};


export const addUserToProject = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const {users, projectId} = req.body;
       const loggedInUser = await userModel.findOne({email: req.user.email});

       const project = await projectServices.addUserToProject({projectId: projectId, users: users, userId: loggedInUser._id});

         return res.status(200).json({project: project});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error.message});
    }
}