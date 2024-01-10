import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStorage from './storage/UserStorage';
import ArticleStorage from './storage/ArticleStorage';

export const Context = createContext(null);

const root = createRoot(document.getElementById('root'));

root.render(
  <Context.Provider value={{
    user: new UserStorage(),
    article: new ArticleStorage(),

  }}>
    <App />
  </Context.Provider>,
);
