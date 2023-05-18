import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FinalizedPage from "./pages/FinalizedPage";

export default function ProjectRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finalized" element={<FinalizedPage />} />
    </Routes>
  );
}
