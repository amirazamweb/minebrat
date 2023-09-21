
import { Routes, Route } from "react-router-dom";
import List from "./components/List";
import Result from "./components/Result";
function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
