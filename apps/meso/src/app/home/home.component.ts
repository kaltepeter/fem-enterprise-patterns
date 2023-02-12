import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

interface Project extends BaseEntity {
  title: string;
  description: string;
  completed: boolean;
}

const superProject: Project = {
  id: '1',
  title: 'Super Project',
  description: 'This is awesome!',
  completed: false,
}

const hellProject: Project = {
  id: '2',
  title: 'Hell Project on Earth',
  description: 'Just make it stop', 
  completed: true
}

const projects: Project[] = [superProject, hellProject]

const newProject: Project = {
  id: null,
  title: '',
  description: '',
  completed: false
}

interface Client extends BaseEntity {
  firstName: string;
  lastName: string;
  company: string;
}

const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, Inc'
}

const john: Client = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  company: 'NA'
}

const clients: Client[] = [peter,john]

interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

const newClient: Client = {
  id: null,
  firstName: '',
  lastName: '',
  company: ''
}

const initialClientsState: ClientsState = {
  clients,
  currentClient: newClient
}

class ClientsStore {
  private state: ClientsState;

  constructor(state: ClientsState) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }
}

const CLIENT_LOAD    = '[Client] Load';
const CLIENT_CREATE  = '[Client] Create';
const CLIENT_UPDATE  = '[Client] Update';
const CLIENT_DELETE  = '[Client] Delete';
const CLIENT_SELECT  = '[Client] Select';
const CLIENT_CLEAR   = '[Client] Clear';

const loadClients = (state: ClientsState, clients: any) => {
  console.log('LOAD CLIENTS', clients);
  return {...state}
}

const selectClient = (state: ClientsState, client: any) => {
  console.log('SELECT CLIENTS', client);
  return {...state}
}

const createClient = (state: ClientsState, client: any) => {
  console.log('CREATE CLIENT', client);
  return {...state}
}

const updateClient = (state: ClientsState, client: any) => {
  console.log('UPDATE CLIENT', client);
  return {...state}
}

const deleteClient = (state: ClientsState, client: any) => {
  console.log('DELETE CLIENT', client);
  return {...state}
}

const clearClient = (state: ClientsState, client: any) => {
  console.log('CLEAR CLIENT', client);
  return {...state}
}

const clientsReducer = (state: ClientsState = initialClientsState, action: Action) => {
  switch (action.type) {
    case CLIENT_LOAD: {
      return loadClients(state, action.payload);
    }
    case CLIENT_SELECT: {
      return selectClient(state, action.payload);
    }
    case CLIENT_CREATE: {
      return createClient(state, action.payload);
    }
    case CLIENT_UPDATE: {
      return updateClient(state, action.payload);
    }
    case CLIENT_DELETE: {
      return deleteClient(state, action.payload);
    }
    case CLIENT_CLEAR: {
      return clearClient(state, action.payload);
    }
    default:
      return {...state};
  }
}

const PROJECT_LOAD    = '[Project] Load';
const PROJECT_CREATE  = '[Project] Create';
const PROJECT_UPDATE  = '[Project] Update';
const PROJECT_DELETE  = '[Project] Delete';
const PROJECT_SELECT  = '[Project] Select';
const PROJECT_CLEAR   = '[Project] Clear';

const loadProjects = (state: ProjectsState, projects: any) => {
  console.log('LOAD PROJECTS', projects);
  return {...state}
}

const selectProject = (state: ProjectsState, project: any) => {
  console.log('SELECT PROJECTS', project);
  return {...state}
}

const createProject = (state: ProjectsState, project: any) => {
  console.log('CREATE PROJECT', project);
  return {...state}
}

const updateProject = (state: ProjectsState, project: any) => {
  console.log('UPDATE PROJECT', project);
  return {...state}
}

const deleteProject = (state: ProjectsState, project: any) => {
  console.log('DELETE PROJECT', project);
  return {...state}
}

const clearProject = (state: ProjectsState, project: any) => {
  console.log('CLEAR PROJECT', project);
  return {...state}
}

const projectsReducer = (state: ProjectsState = initialProjectsState, action: Action) => {
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
      return clearProject(state, action.payload);
    }
    default:
      return {...state};
  }
}

const clientsStore = new ClientsStore(initialClientsState);
// const currentClients = clientsStore.select('clients');
// const currentClient = clientsStore.select('currentClient');
// clientsStore.load(clients);
// clientsStore.select(peter)

interface ProjectsState {
  projects: Project[];
  currentProject: Project;
}

const initialProjectsState: ProjectsState = {
  projects,
  currentProject: newProject
}

class ProjectsStore {
  private state: ProjectsState;

  constructor(state: ProjectsState) {
    this.state = state;
  }

  getState(): ProjectsState {
    return this.state
  }

  select(key: string) {
    return this.state[key];
  }
}

const projectsStore = new ProjectsStore(initialProjectsState);
const currentProjects = projectsStore.select('projects');

interface AppState {
  clientsState: ClientsState;
  projectsState: ProjectsState;
}

const appState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState
}

const tango = currentProjects;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
