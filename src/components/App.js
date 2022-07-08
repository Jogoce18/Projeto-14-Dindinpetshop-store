import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./../css/reset.css";
import "./../css/style.css";
import Home from "./Home";
import Register from "../components/SignupScreen/SignPage";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import UserContext from "./contexts/UserContext";
import Product from "../components/Product/Product";
import ProductList from "./ProductList/ProductList";

import SearchContext from "./contexts/SearchContext";


export default function App() {
	const [userInformation, setUserInformation] = useState({});
	const [searchInformation, setSearchInformation] = useState([]);
	return (
		<UserContext.Provider value={{ userInformation, setUserInformation }}>

			<BrowserRouter>
				<Routes>
				    <Route path="/login" element={<LoginScreen />} />
					<Route path="/cadastro" element={<Register />} />
					<Route path="/home" element={<Home />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/products/:category" element={<ProductList />} />
				
				</Routes>
			</BrowserRouter>

			<SearchContext.Provider
				value={{ searchInformation, setSearchInformation }}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cadastro" element={<Register />} />
						<Route path="/login" element={<LoginScreen />} />
					</Routes>
				</BrowserRouter>
			</SearchContext.Provider>

		</UserContext.Provider>
	);
}
