import { Component } from '@angular/core';
import { clientsReducer, ClientsStore, CLIENT_CREATE, CLIENT_SELECT, initialClientsState } from './client';
import { jane } from './data';
import { initialProjectsState, projectsReducer, ProjectsStore } from './project';


const clientsStore = new ClientsStore(initialClientsState, clientsReducer);
const aClient = clientsStore.select('currentClient');
clientsStore.dispatch({ type: CLIENT_CREATE, payload: jane });
clientsStore.dispatch({ type: CLIENT_SELECT, payload: jane });
const allClients = clientsStore.select('clients');
// const currentClients = clientsStore.select('clients');
// const currentClient = clientsStore.select('currentClient');
// clientsStore.load(clients);
// clientsStore.select(peter)


const projectsStore = new ProjectsStore(initialProjectsState, projectsReducer);
const currentProjects = projectsStore.select('projects');



const appState = {
  clientsState: initialClientsState,
  projectsState: initialProjectsState,
};

const tango = allClients;

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  echo = tango;
}
