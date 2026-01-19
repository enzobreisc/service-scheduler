import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchedulerLayout from "./layouts/SchedulerLayout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<SchedulerLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
