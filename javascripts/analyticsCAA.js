

gadgets.util.registerOnLoadHandler(function() {
alert("About to call---");

	
	$("#caSelectGroup").click(function() {
		
    		var callback = function(response) {
				
				alert("inside callback");

    		}
     			osapi.jive.core.places.requestPicker({success:callback, placeType: "space"});
			
	});
gadgets.window.adjustHeight();
});






