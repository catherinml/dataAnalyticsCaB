gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				alert(data.name);
				var content = renderPlaceOnTable(data);
				$("#caGroupName").html(content);
				//var responseJson = gadgets.json.stringify(data);
			}
		});
	});
});

function renderPlaceOnTable(place) {
	var content = "";
     
     content += "<p>"+ place.name + '</p><input type="hidden" value="'+place.id + '">'
     
	return content ;
}








