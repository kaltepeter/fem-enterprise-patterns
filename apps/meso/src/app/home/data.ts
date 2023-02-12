import { Client, Project } from './model';

export const peter: Client = {
  id: '1',
  firstName: 'Peter',
  lastName: 'Porker',
  company: 'Acme, Inc',
};

export const john: Client = {
  id: '2',
  firstName: 'John',
  lastName: 'Doe',
  company: 'NA',
};

export const jane: Client = {
  id: '1234',
  firstName: 'Jane',
  lastName: 'Doe',
  company: 'Acme',
};

export const newClient: Client = {
    id: null,
    firstName: '',
    lastName: '',
    company: '',
  };
  

export const superProject: Project = {
  id: '1',
  title: 'Super Project',
  description: 'This is awesome!',
  completed: false,
};

export const hellProject: Project = {
  id: '2',
  title: 'Hell Project on Earth',
  description: 'Just make it stop',
  completed: true,
};

export const newProject: Project = {
    id: null,
    title: '',
    description: '',
    completed: false,
  };