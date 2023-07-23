import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
