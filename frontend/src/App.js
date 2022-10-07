// import { Navbar } from "./Components/Navbar";
// import { Footer } from "./Components/Footer";
import { About } from "./Components/About"
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import Pr from "./Components/Pr";
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
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          {/* <Route exact path="/contact" element={<Contact />}>
          </Route> */}
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/register" element={<Register />}>
          </Route>
          <Route exact path="/dash" element={<Dashboard />}>
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          </Route>
          <Route exact path="/pr" element={<Pr />}>
          </Route>
        </Routes>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
