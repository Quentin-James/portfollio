import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './Pages/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;