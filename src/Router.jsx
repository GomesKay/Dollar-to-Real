import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conversor } from "./pages/Conversor";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversor" element={<Conversor />} />
    </Routes>
  );
}
