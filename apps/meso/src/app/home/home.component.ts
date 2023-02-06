import { Component, OnInit } from '@angular/core';

interface BaseEntity {
  id: string | null;
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
