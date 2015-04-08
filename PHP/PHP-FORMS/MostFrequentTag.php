<?php 
	$tags = [];
	if (isset($_GET['tags']) && !empty($_GET['tags'])) {
		foreach (explode(', ', $_GET['tags']) as $tag) {
			if (isset($tags[$tag])) {
				$tags[$tag] +=1;
			} else{
				$tags[$tag] = 1;
			}

		}
	}
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Task 2</title>
</head>
<body>
	<form action="#" method="get">
		<input type="text" name="tags">
		<input type="submit">
	</form>
	<dl>
		<?php foreach($tags as $tagName => $tagValue): ?>
		<dt><?=htmlentities($tagName)?></dt>
		<dd><?=$tagValue?> times</dd>
	<?php endforeach; ?>
	</dl>
	<?php if (reset($tags)): ?>
		<p>Most frequent tag is : <?=htmlentities(key($tags))?></p>
	<?php endif ?>

</body>
</html>