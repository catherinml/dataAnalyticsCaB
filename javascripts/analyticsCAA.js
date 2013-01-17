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
				//getMostContributedData(data.resources.activity.ref);
				
				var instanceURL = "https://sandbox.jiveon.com/api/core/v3/";
		
				$(document).ready(function(){
	
	
					$.ajax({
						   
						url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url='+data.resources.activity.ref+'&instanceURL='+instanceURL,
					    dataType: 'json',
					    type: 'GET',
					    success: function(result) {
					       			alert("success");
					       	        //displayCAData(result.data);
					       	        			    },
					    error: function(XMLHttpRequest, textStatus, errorThrown) {
								    alert("error" + textStatus + "   : " + XMLHttpRequest);
		
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








