import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components:
import RootFile from './Root';
import {lazy} from 'react';

const Home = lazy(() => import('./components/Home'))

const router = createBrowserRouter([
    {
        path:'/',
        element: <RootFile />,
        children: [
            {path:'', element: <Suspense ><Home /></Suspense>},
            {path:'', element: <Suspense ></Suspense>},
            {path:'', element: <Suspense ></Suspense>},
            {path:'', element: <Suspense ></Suspense>},
        ]
    }
])







const App = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default App;