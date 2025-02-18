import { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div>home</div>}></Route>
          <Route path="/login" element={NavBar}></Route>

          <Route></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>

      <NavBar />
    </div>
  );
}

export default App;
