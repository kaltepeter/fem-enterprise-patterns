import { hellProject, newProject, superProject } from './data';
import { addEntity, deleteEntity, updateEntity } from './entity';
import { Action, Project } from './model';

export interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

export const PROJECT_LOAD = '[Project] Load';
export const PROJECT_CREATE = '[Project] Create';
export const PROJECT_UPDATE = '[Project] Update';
export const PROJECT_DELETE = '[Project] Delete';
export const PROJECT_SELECT = '[Project] Select';
export const PROJECT_CLEAR = '[Project] Clear';

const initialProjects: Project[] = [superProject, hellProject];

const initialProjectsState: ProjectsState = {
  projects: initialProjects,
  currentProject: newProject,
};

const loadProjects = (
  state: ProjectsState,
  projects: Project[]
): ProjectsState => {
  return {
    projects,
    currentProject: state.currentProject,
  };
};

const selectProject = (
  state: ProjectsState,
  project: Project
): ProjectsState => {
  return {
    projects: state.projects,
    currentProject: project,
  };
};

const createProject = (
  state: ProjectsState,
  project: Project
): ProjectsState => {
  return {
    projects: addEntity<Project>(state.projects, project),
    currentProject: state.currentProject,
  };
};

const updateProject = (
  state: ProjectsState,
  project: Project
): ProjectsState => {
  return {
    projects: updateEntity<Project>(state.projects, project),
    currentProject: state.currentProject,
  };
};

const deleteProject = (
  state: ProjectsState,
  project: Project
): ProjectsState => {
  return {
    projects: deleteEntity<Project>(state.projects, project),
    currentProject: state.currentProject,
  };
};

const clearProject = (state: ProjectsState): ProjectsState => {
  return {
    projects: state.projects,
    currentProject: null,
  };
};

const projectsReducer = (
  state: ProjectsState = initialProjectsState,
  action: Action
) => {
  switch (action.type) {
    case PROJECT_LOAD: {
      return loadProjects(state, action.payload);
    }
    case PROJECT_SELECT: {
      return selectProject(state, action.payload);
    }
    case PROJECT_CREATE: {
      return createProject(state, action.payload);
    }
    case PROJECT_UPDATE: {
      return updateProject(state, action.payload);
    }
    case PROJECT_DELETE: {
      return deleteProject(state, action.payload);
    }
    case PROJECT_CLEAR: {
      return clearProject(state);
    }
    default:
      return { ...state };
  }
};

class ProjectsStore {
    private state: ProjectsState;
    private reducer: typeof projectsReducer;
  
    constructor(state: ProjectsState, reducer: typeof projectsReducer) {
      this.state = state;
      this.reducer = reducer;
    }
  
    getState(): ProjectsState {
      return this.state;
    }
  
    select(key: string) {
      return this.state[key];
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action)
      }
  }

export {initialProjects, initialProjectsState, projectsReducer, ProjectsStore}