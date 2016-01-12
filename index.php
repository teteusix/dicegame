<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Game</title>
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="assets/css/reset.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="container">
<div class="row">
	<header id="header"><h1>Dice Game!</h1></header>
	<div id="infoGame">
		<ul>
			<li>
				<h2>Stage</h2>
				<input name="stage" value="First Throw">
			</li>
			<li>
				<h2>Point</h2>
				<input name="pv" value=" ">
			</li>
		</ul>
	</div><!--
	 --><div id="game">
			<canvas id="canvas" width="585" height="242">Your browser doesn't support the HTML5 element canvas</canvas>
			<button onClick="throwdice();">Throw!</button>
	 </div><!--
	 --><div id="infoCash">
		<ul>
			<li>
				<h2>Bank</h2>
				<input name="bank" value="100">
			</li>
			<li>
				<h2>Result</h2>
				<input name="outcome" value=" ">
			</li>
		</ul>
	</div>
</div>
</div>
</body>
</html>