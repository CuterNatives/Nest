import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" exact element={<Main page="dashboard"/>} />
      </Routes>
    </Router>
  );
}

export default App;
