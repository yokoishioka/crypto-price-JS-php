<?php 
	$thisDomain = "https://pocketsofscene.app";

?>
<!doctype html>
<html lang="en">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-137789438-1"></script>-->
<script>
	/*
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-137789438-1');
  */
</script>
<meta charset="UTF-8">
<title>Pockets of Scene: Engineering the Cloud with AI</title>
<meta name="Description" content="Engineering the Cloud with Custom, Ever-evolving AI">
<meta name="author" content="Pockets of Scene">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Cache-control" content="no-cache">
<!--<link rel="stylesheet" href="/assets/fontawesome-pro-5.8.1-web/css/all.css">-->
<link rel="stylesheet" href="<?php echo $thisDomain; ?>/common/styles-all.css">
<?php
	if (isset($notes)) {
		echo "<script src='" . $thisDomain . "/common/scripts-notes-header.js' type='application/javascript'></script>";
	}
?>
<?php
	if (isset($cryptocurrencyPriceTracker)) {
		echo "<script src='" . $thisDomain . "/common/scripts-cryptocurrency-price-tracker.js' type='application/javascript'></script>";
	}
?>

</head>

<body>
	<div id="pofs-wrapper">
		<noscript>If you want to see the cool stuff, you have to turn on JavaScript.</noscript>
		<header id="pofs-header">
			<div id="pofs-logo"><a href="<?php echo $thisDomain; ?>/note-taker-pocket/" title="Pockets of Scene: Cloud Engineering AI"><img src="<?php echo $thisDomain ?>/images/pockets-of-scene-logo.png" alt="Pockets of Scene: Cloud Engineering AI" title="Pockets of Scene: Cloud Engineering AI"></a></div>
			<nav id="pofs-main-menu" class="pofs-menu">
				<form id="pofs-authentication" method="GET" action="<?php echo $thisDomain; ?>/common/page-login.php">
					<button name="signin" title="Sign in">sign in</button> <button name="signup" href="<?php echo $thisDomain; ?>/common/page-login.php?action=signup" title="Sign up">sign up</button> 
				</form>
			</nav>
		</header>
		<main id="pofs-main">
	