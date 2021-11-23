import React from "react";

import Land from './Land';
import DashboardLayout from './Component/DashBoard/Layout';
import NoMatch from './NoMatch';
import Session from './Component/Session';
import Interactions from './Component/DashBoard/Interactions';
import Agenda from "./Component/Agenda";
import Vault from "./Component/Vault";
import Settings from "./Component/GeneralSettings";
import Overview from "./Component/DashBoard/Overview";
import Welcome from "./Component/Welcome"
import { Typography } from "@mui/material";
import CreateAccount from "./Component/CreateAccount";
import ContentMessgae from "./Component/ContentMessage"

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
  { path: "/", element: <Land /> },
  { path: "/create-account", element: <CreateAccount /> },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
          path:"",
          element: <Welcome/>
      },
      // {
      //   path: "overview",
      //   element: <Overview />,
      // },
      {
        path: "session",
        element: <Session />,
      },
      {
        path: "agenda",
        element: <Agenda />,
      },
      {
        path: "vault",
        element: <Vault />,
      },
      {
        path: "interactions",
        element: <Interactions />,
      },
      {
        path: "settings",
        element: <Settings/>,
      },
      {
        path: "contentmessage",
        element: <ContentMessgae/>,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },

  { path: "*", element: <NoMatch /> },
];

// export default Routes;
export default routes;
