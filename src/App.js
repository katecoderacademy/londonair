import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";
import { ContactUs } from "./components/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';



function App() {
  
  
  
  return (
    <div className="App">
      <body><main><Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactUs" element={<ContactUs />} />         
        </Routes>
      </Router>

      </main></body>
      <navigation><NavBar /></navigation>
    </div>
  );
}

export default App;
