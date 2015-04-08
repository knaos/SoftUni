<?php 
	$recipient = $_GET['recipient'];
	$subject = $_GET['subject'];
	$body = $_GET['body'];
	$key = ($_GET['key']);

	$formated = "<p class='recipient'>" .
	 htmlspecialchars($recipient) .
	 "</p><p class='subject'>" . 
	 htmlspecialchars($subject) .
	 "</p><p class='message'>".
	 htmlspecialchars($body) .
	 "</p>";
	 $result = '|';
	$count = 0;

	 for ($i=0; $i < strlen($formated); $i++) { 
	 	$value = dechex(ord($formated[$i]) * (ord($key[$i % strlen($key)])));
	 	$result .= $value . '|';
	 	$count++;
	 	if ($count > strlen($key) - 1) {
	 		$count = 0;
	 	}
	 }
	 echo $result;

 ?>