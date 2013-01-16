gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				alert(gadgets.json.stringify(data).name);
			}
		});
	});
});








