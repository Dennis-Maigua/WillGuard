import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <Routes>
      <Route path='/reset-password' element={<Form />} />
    </Routes>
  );
};

export default App;