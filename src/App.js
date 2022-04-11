import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="container">
      <SideMenu />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
