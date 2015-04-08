<?php 
	
function isPrime($n)
{
	for ($i=2; $i <= sqrt($n); $i++) { 
		if ($n % $i == 0) {
			return false;
		}
	}
		return true;

}
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form action="#" method="get">
		<input type="text" name="start">
		<input type="text" name="end">
		<input type="submit">
	</form>
	<?php 
		if (isset($_GET['start']) && isset($_GET['end'])) {
			$start = $_GET['start'];
			$end = $_GET['end'];

			for ($i=$start; $i <= $end; $i++) { 
				if (isPrime($i)) {
					echo "<span style=\"font-weight:bold\">$i, </span>";
				}
				else{
					echo "<span>$i, </span>";
				}
			}
		}


	?>
</body>
</html>