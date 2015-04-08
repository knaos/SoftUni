<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="#" method="get">
		<input type="text" name="numbers">
		<input type="submit">
	</form>
	<?php if (isset($_GET['numbers'])) {
		$numbers = explode(', ', $_GET['numbers']);
		echo "<table border=\"1\">";
		foreach ($numbers as $number) {
			if(is_numeric($number)){
				$sum = 0;
				for ($i=0; $i < strlen($number); $i++) { 
					$sum+=intval($number[$i]);
				}
				echo "<tr><td>$number</td><td>$sum</td></tr>";
			} else{
				echo "<tr><td>$number</td><td>I cannot sum that</td></tr>";

			}
		}
		echo "</table>";
	} ?>
</body>
</html>