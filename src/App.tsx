import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./navigation/AppRoutes";
import "./styles/App.css";

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
