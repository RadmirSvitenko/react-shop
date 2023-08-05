import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
