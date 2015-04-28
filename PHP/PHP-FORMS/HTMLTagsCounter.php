<?php 
session_start();
$validTags = [
	'div',
	'span',
	'p',
	'main',
	'header',
	'nav'
];
if (!isset($_SESSION['counter'])) {
	
$_SESSION['counter'] = 0;
}
if (isset($_GET['tag'])) {
	$tag = $_GET['tag'];
	foreach ($validTags as $key => $value) {
	if ($value == $tag) {
		$_SESSION['counter']++;
		$check = true;
		break;
	}
	else{
		$check = false;
	}
}	
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
 		<label for="tag">Enter a tag</label>
 		<input type="text" name="tag">
		<input type="submit">
 	</form>
 	<?php if (isset($tag) && $check): ?>
 		<p>Correct</p>
 	<?php else: ?>
 		<p>Incorrect</p>
 	<?php endif ?>
 	<p><?=$_SESSION['counter']?></p>
 </body>
 </html>