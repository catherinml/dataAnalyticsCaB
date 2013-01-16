

gadgets.util.registerOnLoadHandler(function() {

	
	$("#caSelectGroup").click(function() {
		
    		var callback = function(response) {
				
				alert("inside callback");
	 			//var places = getPlaceFromResponse(response);
				//alert("Places--" + places );
      			//var content = renderPlaceOnTable(places);
				//$("#caGroupName").html(content);
				//gadgets.window.adjustHeight();
    		}
     			osapi.jive.core.places.requestPicker({success:callback, placeType: "group"});
			
	});
gadgets.window.adjustHeight();
});

	/*function getPlaceFromResponse(response) {
		 alert("response length" + response);
		  var places = [];
		
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
*/






