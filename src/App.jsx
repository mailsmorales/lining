import { Route, Routes } from "react-router-dom";
import { TheHomePage } from "./views/TheHomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TheHomePage />} />
    </Routes>
  );
}

export default App;
