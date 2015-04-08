<?php
	date_default_timezone_set('Europe/Sofia');
	$input = preg_split("/\r?\n/", $_GET['messages']);
	$currentTime = strtotime($_GET['currentDate']);
	$lastTime = 0;
	$messages = [];
	foreach ($input as $key => $value) {
		$messageInfo = preg_split("/\s+\/\s+/", $value, -1, PREG_SPLIT_NO_EMPTY);
		$text = $messageInfo[0];
		$date = strtotime($messageInfo[1]);
		$messages[$date] = $text;
		if ($date > $lastTime) {
			$lastTime = $date;
		}
	}
	ksort($messages);
	foreach ($messages as $value) {
		echo "<div>" . htmlentities($value) . "</div>\n";
		
	}
	$timeStamp = getTimeMark($lastTime, $currentTime);
	echo "<p>Last active: <time>$timeStamp</time></p>";
	
function getTimeMark($lastTime, $currentTime) {
    $timeDiff = $currentTime - $lastTime;
    $timeStamp = '';

    $lastDay = date('z', $lastTime);
    $currentDay = date('z', $currentTime);

if ($lastDay == $currentDay) {
if ($timeDiff < 60) {
$timeStamp = "a few moments ago";
} else if ($timeDiff < 60 * 60) {
$minutes = floor($timeDiff / 60);
$timeStamp = "$minutes minute(s) ago";
} else if ($timeDiff < 24 * 60 * 60) {
$hours = floor($timeDiff / (60 * 60));
$timeStamp = "$hours hour(s) ago";
}
}
else if ($lastDay + 1 == $currentDay) {
$timeStamp = "yesterday";
} else {
 $timeStamp = date("d-m-Y", $lastTime);
}
return $timeStamp;
}
