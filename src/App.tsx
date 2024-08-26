import { Routes, Route } from "react-router-dom";

import { TreasuryDashboard, Account, Calculator } from "./views";
import "./style.css";
import LandingPage from "./views/landing/LandingPage";
import Dashboard from "./Dashboard";
import NotFound from "./views/404/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<TreasuryDashboard />} />
          <Route path="account" element={<Account />} />
          <Route path="calculator" element={<Calculator />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
