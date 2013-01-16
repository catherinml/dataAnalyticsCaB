gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				alert(data.resources.activity.ref);
				alert(gadgets.json.stringify(data));
				var content = renderPlaceOnTable(data);
				$("#caGroupName").html(content);
				//var responseJson = gadgets.json.stringify(data);

$(document).ready(function(){
	
	var instanceURL = "https://sandbox.jiveon.com";
	$.ajax({
		   
		url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url='+content+'&instanceURL='+instanceURL,
	    dataType: 'json',
	    type: 'GET',
	    success: function(result) {
	       
	       	        alert(result.data);
	    },
	    error: function(XMLHttpRequest, textStatus, errorThrown) {
	    			alert(errorThrown); 	
	    }
	});
	});
			}
		});
	});
});

function renderPlaceOnTable(place) {
	var content = "";
     
     content += "<p>"+ place.name + '</p><input type="hidden" value="'+place.id + '">'
     
	return content ;
}








