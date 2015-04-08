<?php 
if (isset($_GET['years'])) {
	$years = $_GET['years'];
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
 		<input type="text" name="years">
 		<input type="submit">
 	</form>
 	<?php if (isset($years)): ?>
 		<table>
 			<tr>
 				<td>Year</td>
 				<td>January</td>
 				<td>February</td>
 				<td>March</td>
 				<td>April</td>
 				<td>May</td>
 				<td>June</td>
 				<td>July</td>
 				<td>August</td>
 				<td>September</td>
 				<td>October</td>
 				<td>November</td>
 				<td>December</td>
 				<td>Total:</td>
 			</tr>
 			<?php for($i = 2014; $i > 2014 - $years; $i--):
 				$sum = 0;
 			?>
	 			<tr>
	 				<td><?=$i?></td>
	 			<?php for($j=0; $j < 12; $j++):
		 				$expense = rand(0, 999);
		 				$sum += $expense;
		 				 ?>
		 				 <td><?= $expense ?></td>
		 				<?php endfor; ?>
		 				<td><?= $sum ?></td>
		 		</tr>
 			<?php endfor; ?>
 		</table>
 	<?php endif ?>
 </body>
 </html>