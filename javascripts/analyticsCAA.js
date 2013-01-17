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
						   
						//url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed/jsonP?url='+data.resources.activity.ref+'&instanceURL='+instanceURL+'&callback=',
						//url:'https://ajax.googleapis.com/ajax/services/search/books?v=1.0&q=jquery',
						url:'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed/jsonP?url=https://sandbox.jiveon.com/api/core/v3/places/2706/activities&instanceURL=https://sandbox.jiveon.com/api/core/v3/',
					    dataType: 'jsonp',
					    type: 'GET',
					    crossDomain:true,
					    success: function(result) {
					       			alert("success");
					       	        //displayCAData(result.data);
					    },
					    error: function(xhr,err) {
								    alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status+"\nresponseText: "+xhr.responseText);
					    			alert(err); 	
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
