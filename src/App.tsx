import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./navigation/AppRoutes";

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
export default App;
