<?php 
	$tags = [];
	if (isset($_GET['amount'], $_GET['valueType'], $_GET['interest'], $_GET['time'])) {
		$amount = (float)$_GET['amount'];
		$type = $_GET['valueType'];
		$time = (int)$_GET['time'];
		$interest = (float)$_GET['interest'];
		$result = $amount;
		$interestMonth = $interest /12 /100;
		for ($i=0; $i < $time; $i++) { 
			$result += $result * $interestMonth;
		}
		$result = round($result, 2);
	}
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 </head>
 <body>
 	<?php if (isset($result)): ?>
 		<p><?=$type . ' ' . $result?></p>
 	<?php endif ?>
 	<form method="get">
 		<input type="text" name="amount">
 		<input type="radio" name="valueType" value="$">
 		<input type="radio" name="valueType" value="€">
 		<input type="radio" name="valueType" value="BGN">
 		<input type="text" name="interest">
 		<select name="time" id="time">
 			<option value="6">6 months</option>
 			<option value="12">1 Year</option>
 			<option value="24">2 Years</option>
 			<option value="60">5 Years</option>

 		</select>
 		<input type="submit" value="Calculate">

 	</form>
 </body>
 </html>