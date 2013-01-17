gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		$(document).ready(function(){
	
	
					$.ajax({
						   
						url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url=https://sandbox.jiveon.com/api/core/v3/places/2706/activities&instanceURL=https://sandbox.jiveon.com/api/core/v3/',
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

	});
});

	function renderPlaceOnTable(place) {
		var content = "";
	     
	     content += "<p>"+ place.name + '</p><input type="hidden" value="'+place.id + '">'
	     
		return content ;
	}
