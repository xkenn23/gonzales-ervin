import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Login from "./pages/login";

function App() {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <div>
        <h1 className="text-4xl font-bold">Welcome Home Screen</h1>
        <Routes>
          <Route path="/" element={<LoginForm setUser={setUser} />} />
          <Route path="/login" element={<Login user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
