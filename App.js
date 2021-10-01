import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Routes from "./Routes";
import Footer from "./layouts/main/components/Footer";

export default function App() {
      return (
        <div>
          <div style={{ minHeight: "100vh" }}>
            <Router>
              <Routes />
            </Router>
          </div>
        </div>
      );
}
