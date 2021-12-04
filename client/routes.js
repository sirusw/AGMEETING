import React from "react";

//Layout
import DashboardLayout from "./Component/DashBoard/Layout";

//Session Components
import Land from "./Land";
import GroupedList3 from "./Component/Session/Session";
import Agenda from "./Component/Agenda/agenda";
import Vault from "./Component/Vault/vault";

import About from "./About";
import NoMatch from "./NoMatch";
import Testpg from "./anothertestpg";

import LoggedinUsers from "./Component/AdminComponents/LoggedInUsers";
import RegisteredUsers from "./Component/AdminComponents/RegisteredUsers";
import Stats from "./Component/AdminComponents/Stats/Stats";
import Settings from "./Component/AdminComponents/Settings/Settings";

// // Declarative routing model
// return (
//     <Router>
//         <Switch>
//             <Route exact path="/" component={Land} />
//         </Switch>
//     </Router>
// )

//Programmatic routing model
const routes = [
  // { path: '/', element: <Land /> },
  // {
  //     path: 'about',
  //     element: <About />,
  //     children: [
  //         {
  //             path: '/about', element: <NoMatch />
  //         }
  //     ]
  // },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <GroupedList3 /> },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      // {
      //     path: ''
      // },
      {
        path: "/vault",
        element: <Vault />,
        // children: [
        //     { index: true, element: <Testpg/> },
        // ]x
      },
      {
        path: "/loggedinUsers",
        element: <LoggedinUsers />,
      },
      {
        path: "/registeredusers",
        element: <RegisteredUsers />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },

  // },
  // // {
  //     path: '/about',
  //     element: <About />,

  //     children: [
  //         { index: true, element: <Testpg /> },
  //         {
  //             path: '/about',
  //             element: <About />,
  //             children: [
  //                 { index: true, element: <About /> },
  //             ]
  //         },
  //         { path: "*", element: <NoMatch /> }
  //     ]

  // },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
