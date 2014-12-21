<?php
	require_once 'medoo.php';

	$database = new medoo();

	$title = $_POST['btitle'];
	$subtitle = $_POST['bsubtitle'];
	$content = $_POST['bcontent'];

	$id = $database->insert("BlogEntries", [
		"title" => $title,
		"subtitle" => $subtitle,
		"content" => $content
	]);
?>