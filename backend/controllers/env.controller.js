import { EnvFile } from "../models/env.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { getProjectAccess } from "../utils/ProjectAccess.js";

const createEnvFile = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const { projectId } = req.params;

  if (!title || !content) throw new ApiError(400, "All fields are required");

  if (title.length < 3)
    throw new ApiError(400, "Title must be at least 3 characters");

  const access = await getProjectAccess(projectId, req.user);
  if (!access || access.role === "viewer") {
    throw new ApiError(403, "Only editor can create the env files");
  }

  access.project.recentAt = Date.now();
  await access.project.save();
  //   create env file
  const envFile = await EnvFile.create({
    title,
    content,
    projectId,
  });

  res.status(201).json({
    success: true,
    message: "Env file created successfully",
    envFile: {
      _id: envFile._id,
      title: envFile.title,
      content: envFile.content,
      projectId: envFile.projectId,
      createdAt: envFile.createdAt,
    },
  });
});

const getEnvFile = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const access = await getProjectAccess(projectId, req.user);
  if (!access) {
    throw new ApiError(403, "Access Denied");
  }

  //   Fetch env's
  const envFiles = await EnvFile.find({
    projectId,
  });

  res.status(200).json({
    success: true,
    message: "Env files fetched successfully",
    envFiles,
  });
});

const updateEnvFile = asyncHandler(async (req, res) => {
  const { envId } = req.params;
  const { title, content } = req.body;

  if (!title && !content) throw new ApiError(400, "Nothing to update");

  if (title && title.length < 3)
    throw new ApiError(400, "Title must be at least 3 characters");

  if (content && content.length < 3)
    throw new ApiError(400, "Content must be at least 3 characters");

  const envFile = await EnvFile.findById(envId);

  if (!envFile) throw new ApiError(404, "Env file not found");

  const access = await getProjectAccess(envFile.projectId, req.user);
  if (!access || access.role === "viewer") {
    throw new ApiError(403, "Only editior can update the env file");
  }

  if (title) envFile.title = title;
  if (content) envFile.content = content;
  access.project.recentAt = Date.now();
  await access.project.save();
  await envFile.save();

  res.status(200).json({
    success: true,
    message: "Env File updated successfully.",
    envFile,
  });
});

const deleteEnvFile = asyncHandler(async (req, res) => {
  const { envId } = req.params;

  const envFile = await EnvFile.findById(envId);

  if (!envFile) throw new ApiError(404, "Env file not found");

  const access = await getProjectAccess(envFile.projectId, req.user);
  if (!access || access.role === "viewer") {
    throw new ApiError(403, "Only editors can delete the env file");
  }

  access.project.recentAt = Date.now();
  await access.project.save();
  await envFile.deleteOne();

  res.status(200).json({
    success: true,
    message: "Env File deleted successfully.",
  });
});

const getEnvFileById = asyncHandler(async (req, res) => {
  const { envId } = req.params;

  const envFile = await EnvFile.findById(envId);

  if (!envFile) throw new ApiError(404, "Env file not found");

  const access = await getProjectAccess(envFile.projectId, req.user);
  if (!access) {
    throw new ApiError(403, "Access Denied");
  }

  res.status(200).json({
    success: true,
    message: "Env File fetched successfully.",
    envFile,
  });
});

export {
  createEnvFile,
  getEnvFile,
  updateEnvFile,
  deleteEnvFile,
  getEnvFileById,
};
