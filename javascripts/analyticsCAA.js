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
								    alert("error" + textStatus);
		
					    			alert(errorThrown); 	
					    }
					});
				});
		


			}
		});
	});
});

	function getMostContributedData(activityUrl) {
		var instanceURL = "https://sandbox.jiveon.com/api/core/v3/";
		
		$(document).ready(function(){
	
	
			$.ajax({
				   
				url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url='+activityUrl+'&instanceURL='+instanceURL,
			    dataType: 'json',
			    type: 'GET',
			    success: function(result) {
			       			alert("success");
			       	        displayCAData(result.data);
			       	        			    },
			    error: function(XMLHttpRequest, textStatus, errorThrown) {
						    alert("error" + textStatus);

			    			alert(errorThrown); 	
			    }
			});
		});
	}
	
	function displayCAData(data) {
		var content="";
	
		if($.isArray(data)) {
			for(var i = 0; i < data.length; i++) {
		
				content += "<tr>";
				content += "<td> " + ' <a href="'+data[i].userProfileUrl+'">' + '<img height="45" width="45" src="' + data[i].avatarUrl + '"/> </a>' + '</td>';
				content += "<td>" + '<a href="'+data[i].objectURL+'">' + data[i].objectName + '</a>  </td>';
				content += "</tr>";
			}
		} else {
			content += "<tr>";
			content += "<td> " + ' <a href="'+data.userProfileUrl+'">' + '<div height="45" width="45" > <img height="45" width="45" src="' + data.avatarUrl + '"/></div> </a>' + '</td>';
			content += "<td>" + '<a href="'+data.objectURL+'">' + data.objectName + '</a> </td>';
			content += "</tr>";
		}
		alert(content);
		$("#user-ca-content").html(content);
	}
	

	function renderPlaceOnTable(place) {
		var content = "";
	     
	     content += "<p>"+ place.name + '</p><input type="hidden" value="'+place.id + '">'
	     
		return content ;
	}








