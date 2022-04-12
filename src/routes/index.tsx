import {
  BrowserRouter,
  Routes as RRDRoutes,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RRDRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </RRDRoutes>
    </BrowserRouter>
  );
}