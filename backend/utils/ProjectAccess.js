import { Project } from "../models/project.model.js";

const getProjectAccess = async (projectId, userId) => {
  const project = await Project.findById(projectId);

  if (!project) {
    return null;
  }

  if (project.userId.equals(userId)) {
    return { project, role: "owner" };
  }

  const sharedUser = project.sharedWith.find((u) => u.userId.equals(userId));

  if (sharedUser) {
    return {
      project,
      role: sharedUser.role,
    };
  }

  return null;
};

export { getProjectAccess };
