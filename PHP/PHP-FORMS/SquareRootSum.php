<?php 
	$sum = 0;

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<table>
		<tr>
			<td>Number</td>
			<td>Square</td>
		</tr>
		<?php 
			for ($i=0; $i <= 100; $i+=2) { 
			$square = round(sqrt($i), 2);
			$sum+=$square;
			echo "<tr><td>$i</td><td>$square</td></tr>";
			}
		 ?>
		 <tr>
		 	<td>Total</td>
		 	<td><?=$sum?></td>
		 </tr>
	</table>
</body>
</html>