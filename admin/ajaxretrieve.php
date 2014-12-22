<?php
	require_once 'medoo.php';
	
	$database = new medoo();

	$datas = $database->select("BlogEntries", [
		"id",
		"title",
		"subtitle",
		"content"
	], [

		"ORDER" => 'id DESC',
		"LIMIT" => 5
	]);


	echo json_encode($datas);
?>