import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DisplayKnifes from "./components/DisplayKnifes/DisplayKnifes";
import Footer from "./components/Footer/Footer";
import KnifeProvider from "./components/KnifeProvider";
import Navbar from "./components/Navbar/Navbar";
import ShopContainer from "./components/ShopContainer/ShopContainer";

export default function App() {
  return (
    <div className="app">
      <KnifeProvider>
        <Router>
          <Navbar />
          <ShopContainer />
          {/* section */}
          <Footer />
        </Router>
      </KnifeProvider>
    </div>
  );
}
