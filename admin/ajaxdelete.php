<?php
	require_once 'medoo.php';
	
	$database = new medoo();

	$id = $_GET['id'];

	$database->delete("BlogEntries", [
			"id" => $id
	]);

	echo "Deleted post with id: " . $id;
?>