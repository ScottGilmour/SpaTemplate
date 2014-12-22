<?php
	require_once 'medoo.php';
	
	$database = new medoo();

	$datas = $database->select("WebsiteSettings", [
		"title",
		"address",
		"phone",
		"other"
	]);

	echo json_encode($datas);
?>