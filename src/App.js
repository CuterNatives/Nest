import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
window.onerror = function(message, source, lineno, colno, error){
    
}
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Main page="dashboard"/>} />
        <Route path="/dashboard" exact element={<Main page="dashboard"/>} />
        <Route path="/items" exact element={<Main page="items"/>} />
        <Route path="/inventory" exact element={<Main page="inventory"/>} />
        <Route path="/reports" exact element={<Main page="reports"/>} />
      </Routes>
    </Router>
  );
}

export default App;
