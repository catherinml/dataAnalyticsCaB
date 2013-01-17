gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		$(document).ready(function(){
					var query = 'jquery';
	
					$.ajax({
						   
						url: 'https://ajax.googleapis.com/ajax/services/search/books?v=1.0&q=' + query;',
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
