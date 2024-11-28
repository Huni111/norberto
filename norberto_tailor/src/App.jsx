import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components:
import RootFile from './Root';
import {lazy} from 'react';
import Home from './components/Home'

// const Home = lazy(() => import('./components/Home'))

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootFile />,
        children: [
            {path:'/', element: <Home />},
           
        ]
    }
])







const App = () => {
    return(
        <>
        <RouterProvider router={router}>
        {router}
        </RouterProvider>
        </>
    )
}

export default App;