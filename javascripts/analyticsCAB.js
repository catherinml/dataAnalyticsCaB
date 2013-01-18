var instanceURL = "https://sandbox.jiveon.com/api/core/v3/";
gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		$("#cadata").css("display","block");
		loadingImage();
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				
				var content = renderPlaceOnTable(data);
				$("#caGroupName").html(content);
				//var responseJson = gadgets.json.stringify(data);
				getMostContributedData(data.resources.activity.ref);
				$("#hidActivityUrl").val(data.resources.activity.ref);
				
				/*var instanceURL = "https://sandbox.jiveon.com/api/core/v3/";
		
				$(document).ready(function(){
	
	
					$.ajax({
						   
						url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed/jsonP?url='+data.resources.activity.ref+'&instanceURL='+instanceURL,
						//url:'https://ajax.googleapis.com/ajax/services/search/books?v=1.0&q=jquery',
						//url:'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed/jsonP?url=https://sandbox.jiveon.com/api/core/v3/places/2706/activities&instanceURL=https://sandbox.jiveon.com/api/core/v3/',
					    dataType: 'jsonp',
					    type: 'GET',
					    crossDomain:true,
					    success: function(result) {
					       			alert("success"+result.data);
					       	        //displayCAData(result.data);
					    },
					    error: function(xhr,err) {
								    alert("readyState: "+xhr.readyState+"\nstatus: "+xhr.status+"\nresponseText: "+xhr.responseText);
					    			alert(err); 	
					    }
					});
				});*/
			}
		});
	});
	
	$("input[type='radio']").change(function () {

		loadingImage();
		var recentormost = $(this).val();
		var activityUrl = $("#hidActivityUrl").val();
		var url;
		if (recentormost=="main") {
			url='http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed/jsonP?url='+activityUrl+'&instanceURL='+instanceURL;
		//	url='/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url='+typeID+'&instanceURL='+instanceURL;
		} else if (recentormost=="recent") {
			//url='/CollaborativeAwarenessApp/collabaware/ca/recent?url='+typeID+'&instanceURL='+instanceURL;
			url='http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/recent/jsonP?url='+activityUrl+'&instanceURL='+instanceURL;
		}
		
		$.ajax({
		    url: url,
			dataType: 'jsonp',
			type: 'GET',
			crossDomain:true,
		    success: function(result) {
		       
		       	        displayCAData(result.data);
		       	       // gadgets.window.adjustHeight();
		       	        $("#cadata").css("display","block");

		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {
		    			alert(errorThrown); 	
		    }
		});
		
	});
	
});

	function displayCAData(data) {
		var content="";
		
		if($.isArray(data)) {
			for(var i = 0; i < data.length; i++) {
			
				content += "<tr>";
				content += '<td width="5%"> ' + ' <a href="'+data[i].userProfileUrl+'">' + '<img height="45" width="45" src="' + data[i].avatarUrl + '"/> </a>' + '</td>';
				content += '<td width="25%">' + '<a href="'+data[i].objectURL+'">' + data[i].objectName + '</a> </td>';
				content += "</tr>";
			}
		} else {
			content += "<tr>";
			content += '<td width="4%"> '+ ' <a href="'+data.userProfileUrl+'">' + '<div height="45" width="45" > <img height="45" width="45" src="' + data.avatarUrl + '"/></div> </a>' + '</td>';
			content += '<td width="26%">' + '<a href="'+data.objectURL+'">' + data.objectName + '</a> </td>';
			content += "</tr>";
		}
		
		$("#user-ca-content").html(content);
	}


	function getMostContributedData(activityUrl) {
	
		
		$(document).ready(function(){

			$.ajax({
			
				//url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url='+activityUrl+'&instanceURL='+instanceURL,
				url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed/jsonP?url='+activityUrl+'&instanceURL='+instanceURL,
				dataType: 'jsonp',
				type: 'GET',
				crossDomain:true,
				success: function(result) {
					
					
					displayCAData(result.data);
					
					//gadgets.window.adjustHeight();
					


				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert(errorThrown);
				}
			});
		});
	}

	function renderPlaceOnTable(place) {
		var content = "";
	     
	     content += '<a href="'+place.resources.html.ref+'">'+ place.name + '</a><input type="hidden" value="'+place.id + '">'
	     
		return content ;
	}
	
	function loadingImage() {
		var content="";
		content += "<tr>";
		
		content += '<td align="center">' + '<img src="https://raw.github.com/catherinml/dataAnalyticsCaA/master/images/ajax-loader.gif" /> </td>';
		content += "</tr>";
		$("#user-ca-content").html(content);
	}
