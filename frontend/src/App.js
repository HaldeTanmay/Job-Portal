import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { About } from "./Components/About"
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Recruiter } from "./Components/Recruiter";
import { Home } from "./Components/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/register" element={<Register />}>
          </Route>
          <Route exact path="/recruiter" element={<Recruiter />}>
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
