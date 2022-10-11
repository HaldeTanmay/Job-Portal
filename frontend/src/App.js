// import { Navbar } from "./Components/Navbar";
// import { Footer } from "./Components/Footer";
import { About } from "./Components/About"
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Dashboard } from "./Components/Dashboard";
import { Job } from "./Components/Job";
import { Error } from "./Components/Error";
import { Eg } from "./Components/Eg";
import { JobPost } from "./Components/JobPost";
import Pr from "./Components/Pr";
import ApplyJob from "./Components/ApplyJob";
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
          <Route exact path="/apply" element={<ApplyJob />}>
          </Route>
          <Route exact path="/job" element={<Job />}>
          </Route>
          <Route exact path="*" element={<Error />}>
          </Route>
          <Route exact path="/eg" element={<Eg />}>
          </Route>
          <Route exact path="/jobpost" element={<JobPost />}>
          </Route>
        </Routes>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
