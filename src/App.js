

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Componants/Home/home';
import English from './Componants/pages/English';
import Layout from './Componants/Layout';
import PdClass from './Componants/pages/PdClass';
import EnglishCommunication from './Componants/pages/EnglishCommunication';
import WebDevlopment from './Componants/pages/WebDevlopment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/english", element: <English /> },
      { path: "/pdclass", element: <PdClass /> },
      { path: "/englishcommunication", element: <EnglishCommunication /> },
      { path: "/webdevelopment", element: <WebDevlopment /> },

    ],
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
