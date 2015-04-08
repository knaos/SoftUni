<?php 
date_default_timezone_set('Europe/Sofia');
$text=preg_split("/\r?\n/", $_GET['text']);
foreach ($text as $article) {
	if (preg_match_all("/^\s*([\w\s\-]+)\s*%\s*([\w\s\.\-]+)\s*\;\s*[\d]{2}-(\d{2})-\d{4}\s*-\s*(.{1,100})/", $article, $matches)) {
		
	$article = preg_match_all("/^\s*([\w\s\-]+)\s*%\s*([\w\s\.\-]+)\s*\;\s*[\d]{2}-(\d{2})-\d{4}\s*-\s*(.{1,100})/", $article, $matches);
	
	$name = trim($matches[1][0]);
	$author = trim($matches[2][0]);
	$artDate = date('F', $matches[3][0]);
	$summary = substr(trim($matches[4][0]), 0, 100);
	

	echo "<div>\n";
	echo "<b>Topic:</b> <span>" . htmlentities($name) ."</span>\n";
	echo "<b>Author:</b> <span>". htmlentities($author) ."</span>\n";
	echo "<b>When:</b> <span>" . htmlentities($artDate). "</span>\n";
	echo "<b>Summary:</b> <span>". htmlentities($summary). "...</span>\n";
	echo "</div>\n";
	}
}
 ?>