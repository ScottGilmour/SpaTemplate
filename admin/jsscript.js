$(document).ready(function() {
	loadBlogEntries();

	function loadBlogEntries() {
		$.getJSON('ajaxretrieve.php', function(data) {
            /* data will hold the php array as a javascript object */
            $.each(data, function(key, val) {
                $('#tablebodyblogentries').append('<tr>' + '<td>'+key+'</td>' + '<td>'+val.title+'</td>' + '<td>'+val.subtitle+'</td>' + '<td>'+val.content+'</td>' + '</tr>');
            });
        });
	}

	$("#submitbtn").click(function() {

		var title = $("#title").val();
		var subtitle = $("#subtitle").val();
		var content = $("#content").val();

		// Returns successful data submission message when the entered information is stored in database.
		var dataString = 'btitle='+ title + '&bsubtitle='+ subtitle + '&bcontent='+ content;

		if(title==''||subtitle==''||content=='')
		{
			alert("Please Fill All Fields");
		}
			else
		{
			// AJAX Code To Submit Form.
			$.ajax({
				type: "POST",
				url: "ajaxsubmit.php",
				data: dataString,
				cache: false,
				success: function(result){
					$('#newentry')[0].reset();
				}

			});
		}
		return false;
	});



});