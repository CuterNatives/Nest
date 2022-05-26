import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
