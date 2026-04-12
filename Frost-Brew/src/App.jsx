import React from "react";
import Login from "./pages/login";
import Deals from "./pages/deal";
import SweetDelights from "./pages/sweetDelights";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/deal" element={<Deals />} />
          <Route path="/sweetDelights" element={<SweetDelights />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;