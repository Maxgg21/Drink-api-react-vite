import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import SignUp from "../page/User/SingUp";
import SignIn from "../page/User/SingIn";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

