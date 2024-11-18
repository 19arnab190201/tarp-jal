import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Assets from './Components/Assets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </Router>
  );
}

export default App;
