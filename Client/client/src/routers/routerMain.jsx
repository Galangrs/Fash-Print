import App from '../App.jsx'
import HomePage from '../views/HomePage.jsx'
import EditPage from '../views/EditPage.jsx'
import AddProduct from '../views/AddProduct.jsx'
import { createBrowserRouter } from 'react-router-dom'
import InvalidPage from '../views/404page.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: ':id',
                element: <EditPage />,
            },
            {
                path: 'add-product',
                element: <AddProduct />,
            },
        ],
    }, {
        path: '*',
        element: <App />,
        children: [
            {
                path: '*',
                element: <InvalidPage />,
            },
        ],
    },
])

export default router
