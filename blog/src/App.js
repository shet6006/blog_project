import React from 'react';
import { AppDataProvider } from './components/DataContext';
import { RouterProvider } from 'react-router-dom';
import router from './components/Router';
import './App.css';

function App() {
  return (
    <AppDataProvider>
      <RouterProvider router={router} />
    </AppDataProvider>
  );
}

export default App;
