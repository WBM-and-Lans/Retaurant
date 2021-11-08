import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import MenuFood from "./component/MenuFood";
import MainPage from "./component/MainPage";
import Cart from "./component/Cart";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    
    <Route path="mealmenu" element={<MenuFood/>}></Route>
    <Route path="mainpage" element={<MainPage/>}></Route>
    <Route path="cart" element={<Cart/>}></Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
  </BrowserRouter>,
  rootElement
);