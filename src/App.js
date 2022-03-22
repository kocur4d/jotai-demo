import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Mileage } from "./Mileage";
import { Vin } from "./VIN";
import { Images } from "./Images";
import { Results } from "./Results";

function App() {
  return (
    <Suspense fallback={null}>
      <Router>
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Mileage />} />
            <Route path="/vin" element={<Vin />} />
            <Route path="/images" element={<Images />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
