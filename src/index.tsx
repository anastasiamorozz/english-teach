import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/routes';

interface State {
  store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
  store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <Context.Provider value={{
    store
  }}>
        <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  </Context.Provider>
);

