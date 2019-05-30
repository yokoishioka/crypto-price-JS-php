/* get bitcoin price */
//getCryptoPrice("BTC");

/* get litecoin price */
//getCryptoPrice("LTC");

/* get prices from Coinbase through http request */
function getCryptoPrice(crypto) {
	"use strict";
	var xhttp = new XMLHttpRequest();
	var thisElement = document.createElement("div");
	var thisText;
	xhttp.open("GET", "https://api.coinbase.com/v2/prices/" + crypto.toUpperCase() + "-USD/buy");
	xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhttp.setRequestHeader('Content-Type', 'text/json');
	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			var thisData = JSON.parse(this.responseText);			
			thisText = document.createTextNode(thisData.data.base + ": $" + thisData.data.amount);
			thisElement.appendChild(thisText);
		}
		else if (this.status !== 200) {
			thisText = document.createTextNode("uh oh! it didn't work.");
			thisElement.appendChild(thisText);
			
		}
		document.getElementById("pofs-crypto-prices-" + crypto.toLowerCase()).appendChild(thisElement);
	};

	xhttp.send();
}
/* get prices from Coinbase through web socket */
window.onload = function() {
	"use strict";
	var connection=new WebSocket("wss://ws-feed.pro.coinbase.com");
	var currencyOptions = { style: 'currency', currency: 'USD' };
	var changeToDollar = new Intl.NumberFormat('en-US', currencyOptions);
	var thisDate;
	var thisTime;
	var lastPriceBTC = 0;
	var lastPriceETH = 0;
	var lastPriceLTC = 0;
	
	connection.onopen = function () {
	  connection.send(JSON.stringify({	
		"type": "subscribe",
		"channels": [{ "name": "ticker", "product_ids": [
			"BTC-USD",
			"ETH-USD",
			"LTC-USD"
		] }]

	})); //send a message to server once connection is opened.
	};
	connection.onerror = function (error) {
	  console.log('Error Logged: ' + error); //log errors
	};
	connection.onmessage = function (e) {
	  console.log('Received From Server: ' + e.data); //log the received message
		if (e.data !== "") {
			var thisJSON = JSON.parse(e.data);
			var thisCrypto = thisJSON.product_id.toString();
			var thisPrice = thisJSON.price;
			thisDate = new Date().toLocaleDateString("en-US");
			thisTime = new Date().toLocaleTimeString("en-US");

			var writeCryptoPrice = function(lastPrice) {
				var priceDifference = thisPrice - lastPrice;
				if (lastPrice < thisPrice)  {
					document.getElementById("pofs-crypto-prices-" + thisCrypto.toLowerCase()).innerHTML = "<p>" + thisDate + " " + thisTime + " - <span style='color:cadetblue'>" + changeToDollar.format(thisPrice) + " ▲" + changeToDollar.format(priceDifference) + "</span></p>" + document.getElementById("pofs-crypto-prices-" + thisCrypto.toLowerCase()).innerHTML;
				}
				else {
					document.getElementById("pofs-crypto-prices-" + thisCrypto.toLowerCase()).innerHTML = "<p>" + thisDate + " " + thisTime + " - <span  style='color:indianred'>" + changeToDollar.format(thisPrice) + " ▼" + changeToDollar.format(priceDifference) + "</span></p>" + document.getElementById("pofs-crypto-prices-" + thisCrypto.toLowerCase()).innerHTML;
				}	

			};
			if (thisCrypto === "BTC-USD" && lastPriceBTC !== thisPrice) {			
				writeCryptoPrice(lastPriceBTC);
				lastPriceBTC = thisPrice;
				
			}
			else if (thisCrypto === "ETH-USD" && lastPriceETH !== thisPrice) {	
				writeCryptoPrice(lastPriceETH);
				lastPriceETH = thisPrice;
				
			}
			else if (thisCrypto === "LTC-USD" && lastPriceLTC !== thisPrice) {			
				writeCryptoPrice(lastPriceLTC);
				lastPriceLTC = thisPrice;
			}

			
			/*
			var thisText = document.createTextNode(thisDate + " " + thisTime + " : " + thisDollar.format(thisPrice));
			thisP.appendChild(thisText);
			document.getElementById("crypto-prices-" + thisCrypto).appendChild(thisP);
			*/

		}
	};



};

