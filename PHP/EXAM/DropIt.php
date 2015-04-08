<?php 
$text = $_GET['text'];
$min = $_GET['minFontSize'];
$max = $_GET['maxFontSize'];
$step = $_GET['step'];
$size = $min;
$grow = true;

for ($i=0; $i < strlen($text); $i++) { 
	$even = ord($text[$i]) % 2 == 0 ? true : false;
	if ($even) {
		echo ("<span style='font-size:$size;text-decoration:line-through;'>". htmlentities($text[$i]). "</span>");
	} else {
		echo "<span style='font-size:$size;'>" . htmlentities($text[$i]) . "</span>";
	}

	if (ctype_alpha($text[$i])) {
		if ($size >= $max) {
			$grow = false;
		} 
		if($size <= $min) {
			$grow = true;
		}

		if ($grow) {
			$size += $step;
		} else {
			$size -= $step;
		}

	} 
	
	

	
}


 ?>