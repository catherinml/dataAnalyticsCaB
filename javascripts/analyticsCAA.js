gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				alert(data.name);
				var responseJson = gadgets.json.stringify(data);
				alert(responseJson);

				
				
			}
		});
	});
});








