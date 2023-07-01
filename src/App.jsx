import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";

function App() {
	const user = true;
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/react-shop/" element={<Home />}></Route>
				<Route path="/products/:category" element={<ProductList />}></Route>
				<Route path="/product/:id" element={<Product />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
				<Route path="/success" element={<Success />}></Route>
				<Route path="/login" element={user ? <Home /> : <Login />}></Route>
				<Route
					path="/register"
					element={user ? <Home /> : <Register />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
