import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [coins, setCoins] = useState([]);

	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=Eur&order=market_cap_desc&page=100&sparkline=false&locale=en"
			)
			.then((res) => {
				setCoins(res.data.coins);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="coin-app">
			<div className="coin-search">
				<h1 className="coin-text"> Search a currency </h1>
				<form>
					<input type="text" placeholder="Search" className="coin-input" />
				</form>
			</div>
		</div>
	);
}

export default App;
