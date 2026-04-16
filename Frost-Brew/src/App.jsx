import React from "react";
import Login from "./pages/login";
import Deals from "./pages/deal";
import SweetDelights from "./pages/sweetDelights";
import QuantityButton from "./components/sweetSpecial/QuantityButton";
import SweetBrews from "./pages/sweetBrews";
import Checkout from "./pages/checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/deal" element={<Deals />} />
          <Route path="/sweetDelights" element={<SweetDelights />} />
          <Route path="/quantityButton" element={<QuantityButton />} />
          <Route path="/sweetBrews" element={<SweetBrews />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;