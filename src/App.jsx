import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import CreateTrip from '@/pages/CreateTrip';
import HotelReservation from '@/pages/HotelReservation';

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
        { path: 'hotel', element: <HotelReservation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
