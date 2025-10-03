import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Calls from "./pages/Calls";
import Groups from "./pages/Groups";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main app pages */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </Router>
  );
}
