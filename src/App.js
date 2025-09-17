import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
