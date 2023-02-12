import { ClientsState } from './client';
import { ProjectsState } from './project';

export interface BaseEntity {
  id: string | null;
}

export interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

export interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
}
