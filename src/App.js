import "./App.css";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Layout from "./components/Layout";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const entryID= "7uPQuHh3PdJJSzwjReijgs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home entryId={entryID} />}/>
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
