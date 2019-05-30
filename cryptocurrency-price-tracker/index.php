<?php 
$cryptocurrencyPriceTracker = true;
include "../common/template-header.php"; 
?>

<h1>Cryptocurrency Price Tracker</h1>
<p>See cryptocurrency prices from Coinbase in real-time! View prices only if they update. Get instantaneous calculations of the difference. </p>
<div id="pofs-crypto-price-settings">
<!--	<label for="limitByPriceDifference">Show prices only if there's a price difference of:</label>
	<input name="limitByPriceDifference" id="limitByPriceDifference" placeholder="Enter price difference" pattern="/^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/">
	<button id="changePriceView">Filter Results</button>-->
</div>
<div id="pofs-crypto-prices-section" class="pofs-display-flex-space-between">
	<div id="pofs-crypto-prices-btc">
		Bitcoin (BTC): 
		<div id="pofs-crypto-prices-btc-usd" class="pofs-crypto-price-feed"></div>
	</div>
	<div id="pofs-crypto-prices-eth">
		Ethereum (ETH): 
		<div id="pofs-crypto-prices-eth-usd" class="pofs-crypto-price-feed"></div>
	</div>
	<div id="pofs-crypto-prices-ltc">
		Litecoin (LTC): 
		<div id="pofs-crypto-prices-ltc-usd" class="pofs-crypto-price-feed"></div>
	</div>
</div>

<?php include "https://pocketsofscene.app/common/template-footer.php"; ?>