import "./App.css";
import BirthdayManual from "./BirthdayManual";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/presente">
      <Routes>
        <Route path="/" element={<BirthdayManual />} />
      </Routes>
    </Router>
  );
}

export default App;
