import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routesDefinitions } from './routes';

const router = createBrowserRouter(routesDefinitions);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
