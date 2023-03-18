import React, { memo } from "react";
import ErrorPage from "../../pages/404/ErrorPage";
import { Switch, Route } from "react-router-dom";
import Carpentry from "../../pages/Carpentry/Carpentry";
import Login from "../../pages/Login";
import Join from "../../pages/Join";
import Home from "../../pages/Home";
import AboutTech from "../../pages/AboutTechVillage/AboutTech";
import HireCompany from "../../pages/HireCompany/HireCompany";
import HireIndividual from "../../pages/HireIndividual/HireIndividual";
import ResetPassword from "../../pages/ResetPassword";
import SignUp from "../../pages/SignUp";

export const MainRoutes = memo(() => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/join" component={Join} />
      <Route exact path="/auth/signup" component={SignUp} />
      <Route exact path="/auth/reset-password" component={ResetPassword} />
      <Route exact path="/carpentry" component={Carpentry} />
      <Route exact path="/hire-company" component={HireCompany} />
      <Route exact path="/hire-individual" component={HireIndividual} />
      <Route exact path="/about-tech-village" component={AboutTech} />

      <Route exact path="/" component={Home} />
      {/* Other module routes should come before the landing pages */}
      {/*<Route path="/" component={LandingRoute} />*/}
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
});
