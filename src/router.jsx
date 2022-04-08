import React from 'react'
import PrivateRoute from './layout/PrivateRoute';

const MarketplaceMain = React.lazy(() => import('./page/marketplace'))
const Home = React.lazy(() => import('./page/home'))

const Page404 = React.lazy(() => import('./page/page404'))
const routers = [
    {
        path: "/marketplace",
        element: <PrivateRoute />,
        children: [

            {
                path: '',
                element: <MarketplaceMain />,
            },


        ]
    },
    {
        path: '/',
        element: <Home />,
    },
    // {
    //     path: "/login",
    //     element: <NewLogin />,
    // },

    {
        path: "*",
        element: <Page404 />,
    },
]

export default routers