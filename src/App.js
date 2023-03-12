import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./screens/Welcome/Welcome";
import Survey from "./screens/Survey/Survey";
import Final from "./screens/Final/Final";
import ImageFeedback from "./screens/ImageFeedback/ImageFeedback";
import ImageFeedback2 from "./screens/ImageFeedback2/ImageFeedback2";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/image" element={<ImageFeedback />} />
      <Route path="/image2" element={<ImageFeedback2 />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
};

export default App;
