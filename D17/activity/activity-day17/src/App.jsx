import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavBar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

// const Home = () => <div>Welcome to the App</div>;

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />}>
            <Route path=":id" element={<TeamDetails />} />{" "}
            {/* Dynamic route for team details */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
