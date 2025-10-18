import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './components/HomePage.jsx';
import TeamPage from './components/TeamPage.jsx';
import ServicesPage from './components/ServicePage.jsx';
import ResourcesPage from './components/ResourcesPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // The default page (homepage)
        element: <HomePage />, // If the path is exactly "/" render the HomePage component
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
      {
        path: "team/:activeTab?",
        element: <TeamPage />, // If the path is "/team/{activeTab}" then render the specific TeamPage component
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);