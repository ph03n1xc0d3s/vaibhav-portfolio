import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path="/vaibhav-portfolio/home" element={<Home />} />
            <Route path="/vaibhav-portfolio/projects" element={<Projects />} />
          </Routes>
      </Layout>
    </Router>
  );
}

export default App;
