import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./App.jsx";
import NotFound from "./components/NotFound";
import LandingPage from "./components/LandingPage/Landing";
import MembersPage from "./components/Members/MembersPage"

// function loggedIn() {
//   let token = localStorage.getItem("bucket-token");
//   if(token) {
//     return true
//   } else {
//     return false
//   }
// }
//
// function requireAuth(nextState, replace) {
//   if (!loggedIn()) {
//     replace({
//       pathname: '/login'
//     })
//   }
// }

// function isAdmin(nextState, replace) {
//   let token = localStorage.getItem("token");
//   //decode the token
//   // Check whether the user is an admin
//   //if not admin redirect to the dashboard.
// }


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="members" component={MembersPage} />
    {/*<Route path="/bucketlists" component={BucketlistsPage} onEnter={requireAuth}/>*/}
    <Route path="*" component={NotFound} />
  </Route>
);
