import React from "react";

const Coin = ({ name, image, Symbol, price, volume }) => {
	return (
		<div className="coin-container">
			<div className="coin-row">
				<div className="coin">
					<img scr={image} alt="crypto" />
					<h1>{name}</h1>
					<p className="coin-symbol">{Symbol}</p>
				</div>
				<div className="coin-data">
					<p className="coin-price">${price}</p>
					<p className="coin-volume">${volume.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Coin;
