import mongoose from "mongoose";
import Project from "../models/project.model.js";

export const createProject = async ({ name, userId }) => {
  if (!userId) {
    throw new Error("userId is required");
  }
  if (!name) {
    throw new Error("name is required");
  }

  const project = await Project.create({
    name,
    users: [userId],
  });

  return project;
};

export const getAllProjectsByUserId = async ({ userId }) => {
  if (!userId) {
    throw new Error("userId is required");
  }

  const projects = await Project.find({ users: userId });
  return projects;
};

export const addUserToProject = async ({ projectId, users, userId }) => {
  if (!projectId) {
    throw new Error("projectId is required");
  }
  if (!users || users.length === 0) {
    throw new Error("users is required and must be an array");
  }

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    throw new Error("Invalid projectId");
  }
  if (!Array.isArray(users)) {
    throw new Error("users must be an array");
  }
  if (!userId || userId.length === 0) {
    throw new Error("userId is required");
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid userId");
  }

  const project = await Project.findOne({ _id: projectId, users: userId });
  if (!project) {
    throw new Error("Unauthorized User");
  }

  const updatedProject = await Project.findOneAndUpdate(
    { _id: projectId },
    {
      $addToSet: { users: { $each: users } },
    },
    { new: true }
  );
  project.users = project.users.concat(users);
  await project.save();
  return updatedProject;
};


export const getProjectById = async ({projectId}) => {
  if (!projectId) {
      throw new Error("projectId is required");
  }
  if(!mongoose.Types.ObjectId.isValid(projectId)){    
      throw new Error("Invalid projectId");
  }
  const project = await Project.findOne({
      _id: projectId
  }).populate('users');
  return project;
}