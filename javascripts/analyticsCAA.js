gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				var responseJson = gadgets.json.stringify(data);
				alert(responseJson);

				alert(responseJson.length);
				alert(responseJson[0].type);
			}
		});
	});
});








