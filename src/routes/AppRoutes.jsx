import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemeTablePage from "../pages/MemeTablePage";
import MemeListPage from "../pages/MemeListPage";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MemeTablePage />} />
        <Route path="/list" element={<MemeListPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes