

gadgets.util.registerOnLoadHandler(function() {

	
	$("#caSelectGroup").click(function() {
		
    		var callback = function(response) {
				
				alert("inside callback");

    		}
     			osapi.jive.core.places.requestPicker({success:callback, placeType: "group,space"});
			
	});
gadgets.window.adjustHeight();
});






