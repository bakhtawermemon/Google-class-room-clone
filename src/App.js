

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './Componants/Home/home';
// import English from './Componants/pages/English';
// import Layout from './Componants/Layout';
// import PdClass from './Componants/pages/PdClass';
// import EnglishCommunication from './Componants/pages/EnglishCommunication';
// import WebDevlopment from './Componants/pages/WebDevlopment';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, 
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/english", element: <English /> },
//       { path: "/pdclass", element: <PdClass /> },
//       { path: "/englishcommunication", element: <EnglishCommunication /> },
//       { path: "/webdevelopment", element: <WebDevlopment /> },

//     ],
//   }
// ]);

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;


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
import People from './Componants/EnglishCommunication/people1';
import ClassWork from './Componants/EnglishCommunication/classwork'
import People2 from './Componants/PdClass/people2';
import People3 from './Componants/WebDevelopment/people3';
import Annoucement from './Componants/EnglishCommunication/Announcement';
import Announcement2 from './Componants/WebDevelopment/Announcement2';
import Classwork3 from './Componants/WebDevelopment/classwork3';
import Announcement3 from './Componants/PdClass/Announcement3';
import Classwork2 from './Componants/PdClass/classwork2';








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
      { path: "/people", element: <People /> }, 
      { path: "/classwork", element: <ClassWork /> },
      { path: "/people2", element: <People2 /> }, 
      { path: "/people3", element: <People3 /> },
      { path: "/Annoucement", element: <Annoucement /> },
      { path: "/Annoucement2", element: <Announcement2 /> },
      { path: "/classwork3", element: <Classwork3 /> },
      { path: "/Announcement3", element: <Announcement3 />},
      { path: "/classwork2", element: <Classwork2 /> },




 

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




