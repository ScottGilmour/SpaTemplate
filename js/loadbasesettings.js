$(document).ready(function() {
	loadSettings();

	function loadSettings() {
		$.getJSON('php/retrievesettings.php', function(data) {
            $.each(data, function(key, val) {
                $('#websitetitle').innerHTML = val.title;
                $('#title').append(val.title);
                $('#address').append(val.address);
                $('#phone').append(val.phone);
                $('#other').append(val.other);
            });
        });
	}
});