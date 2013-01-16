gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		osapi.jive.corev3.places.requestPicker({
			type : "space",
			success : function(data) {
				alert(data);
			}
		});
	});
});








