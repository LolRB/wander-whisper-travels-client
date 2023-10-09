import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import CreateTrip from '@/components/CreateTrip';

function App() {
  // Create a router configuration
  const router = createBrowserRouter([
    {
      path: '/',
      // loader: () => fetchPaintings(),
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'create-trip', element: <CreateTrip /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
