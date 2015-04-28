<?php 
	$cars = [];
	$colors = ['red', 'blue', 'green'];
	$randColor = rand(0,2);
	$randAmount = rand(0, 5);
	if (isset($_GET['cars']) && isset($_GET['cars'])) {
		$cars = explode(', ' ,$_GET['cars']);
	}
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Rich</title>
 </head>
 <body>
 	<form action="#" method="get">
 		<input type="text" name="cars">
 		<input type="submit">
 	</form>
	<?php if (isset($_GET['cars']) && !empty($cars)): ?>
		<table>
			<tr>
				<td>Car</td>
				<td>Color</td>
				<td>Count</td>
			</tr>
			<?php foreach ($cars as $car): ?>
				<tr>
					<td><?=$car?></td>
					<td><?=$colors[rand(0,2)]?></td>
					<td><?=rand(0, 5)?></td>
				</tr>
			<?php endforeach ?>
		</table>
	<?php endif ?>

 </body>
 </html>