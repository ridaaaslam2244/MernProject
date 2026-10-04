import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;