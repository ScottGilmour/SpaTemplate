<?php
	require_once 'medoo.php';
	
	$database = new medoo();
	$max = $database->max("BlogEntries", "id");
	$lowerb = $max - 3;

	$datas = $database->select("BlogEntries", [
		"title",
		"subtitle",
		"content"
	], [

		"ORDER" => 'id DESC',
		"LIMIT" => 3
	]);

	echo json_encode($datas);
?>