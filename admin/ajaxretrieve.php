<?php
	require_once 'medoo.php';
	header("Content-type: text/javascript");

	$database = new medoo();

	$datas = $database->select("BlogEntries", [
		"title",
		"subtitle",
		"content"
	],[
		"id[<>]" => [0, 2]
	]);

	echo json_encode($datas);
?>