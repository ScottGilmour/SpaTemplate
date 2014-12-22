$(document).ready(function() {
	loadBlogEntries();

	function loadBlogEntries() {
		$.getJSON('php/ajaxretrieve.php', function(data) {
            $.each(data, function(key, val) {
                $('#blogposts').append(
                	'<div class="row">' + 
                		'<h3>' + val.title + '<small> ' + val.subtitle + '</small></h3>' +
                		'<div class="large-8 medium-8 small-8 columns">' +
                			'<p>' + val.content + '</p>' +
                		'</div>' +
                		'<hr>' +
                	'</div>' 
                );
            });
        });
	}
});