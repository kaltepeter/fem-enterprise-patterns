import { john, newClient, peter } from './data';
import { addEntity, deleteEntity, updateEntity } from './entity';
import { Action, Client } from './model';

export interface ClientsState {
  clients: Client[];
  currentClient: Client;
}

export const CLIENT_LOAD = '[Client] Load';
export const CLIENT_CREATE = '[Client] Create';
export const CLIENT_UPDATE = '[Client] Update';
export const CLIENT_DELETE = '[Client] Delete';
export const CLIENT_SELECT = '[Client] Select';
export const CLIENT_CLEAR = '[Client] Clear';

const initialClients: Client[] = [peter, john];

const initialClientsState: ClientsState = {
  clients: initialClients,
  currentClient: newClient,
};

const loadClients = (state: ClientsState, clients: Client[]): ClientsState => {
  return {
    clients,
    currentClient: state.currentClient,
  };
};

const selectClient = (state: ClientsState, client: Client): ClientsState => {
  return {
    clients: state.clients,
    currentClient: client,
  };
};

const createClient = (state: ClientsState, client: Client): ClientsState => {
  return {
    clients: addEntity<Client>(state.clients, client),
    currentClient: state.currentClient,
  };
};

const updateClient = (state: ClientsState, client: Client): ClientsState => {
  return {
    clients: updateEntity<Client>(state.clients, client),
    currentClient: state.currentClient,
  };
};

const deleteClient = (state: ClientsState, client: Client): ClientsState => {
  return {
    clients: deleteEntity<Client>(state.clients, client),
    currentClient: state.currentClient,
  };
};

const clearClient = (state: ClientsState): ClientsState => {
  return {
    clients: state.clients,
    currentClient: null,
  };
};

const clientsReducer = (
  state: ClientsState = initialClientsState,
  action: Action
) => {
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
      return clearClient(state);
    }
    default:
      return { ...state };
  }
};

class ClientsStore {
  private state: ClientsState;
  private reducer: typeof clientsReducer;

  constructor(state: ClientsState, reducer: typeof clientsReducer) {
    this.state = state;
    this.reducer = reducer;
  }

  getState() {
    return this.state;
  }

  select(key: string) {
    return this.state[key];
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action)
  }
}

export { initialClients, initialClientsState, clientsReducer, ClientsStore };
