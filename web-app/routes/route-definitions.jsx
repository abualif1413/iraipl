import React from 'react';
import { Home, Welcome } from '../components';

export const routesDefinitions = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/welcome',
        element: <Welcome />,
    },
];
