import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./pages/Products/ProductsList/ProductsList";
import ProductDetails from "./pages/Products/ProductsDetails/ProductDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import theme from "./theme";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            {/* <Route path="/" element={<Authentification />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route element={<MainLayout />}>
              <Route path="/products" element={<ProductsList />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
