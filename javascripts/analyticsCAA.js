

gadgets.util.registerOnLoadHandler(function() {

	alert("Hello");

	$("#caSelectGroup").click(function() {
		
    		var callback = function(response) {
				

	 			var places = getPlaceFromResponse(response);
				alert("Places--" + places );
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
		  if(response.data instanceof osapi.jive.core.Place) {
			alert("inside if");
		    	places.push(response.data);
		  } else if (response.data instanceof Array) {
			alert("inside else");
		    	places= response.data;
		  }
		  return places;
	}
	
	function renderPlaceOnTable(places) {
		 var place;
		 var content = "";
		 alert(places);
		 alert(places.length);
		 for(var i = 0; i < places.length; i++) {
    		place = places[i];
    		content += "<p>"+ place.name + '</p><input type="hidden" value="'+place.id + '">'
    	}
		return content ;
	}







