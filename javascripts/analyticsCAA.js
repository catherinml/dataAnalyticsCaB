

gadgets.util.registerOnLoadHandler(function() {

	$("#caSelectGroup").click(function() {
		
    		var callback = function(response) {
				

	 			var places = getPlaceFromResponse(response);
      			var content = renderPlaceOnTable(places);
				$("#caGroupName").html(content);
				gadgets.window.adjustHeight();
    		}
     			osapi.jive.core.places.requestPicker({success:callback, placeType: "group"});
			
	});
gadgets.window.adjustHeight();
});

	function getPlaceFromResponse(response) {
		 alert(response.data);
		  var places = [];
		  if(response.data instanceof osapi.jive.core.places) {
		    	places.push(response.data);
		  } else if (response.data instanceof Array) {
		    	places= response.data;
		  }
		  return places;
	}
	
	function renderPlaceOnTable(places) {
		 var place;
		 var content = "";
		 for(var i = 0; i < places.length; i++) {
    		place = places[i];
    		content += "<p>"+ place.name + '</p><input type="hidden" value="'+place.id + '">'
    	}
		return content ;
	}







