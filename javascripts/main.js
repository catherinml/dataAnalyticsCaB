

gadgets.util.registerOnLoadHandler(function() {

  $("#typeofrelationship").change(function() {
	var typeID = $("#typeofrelationship").val();
	$("#selectgroup").html("");
	if (typeID == "@self" ) {
		osapi.groups.get({ 
			userId : "@me", 
			groupId : "@self", 
			sortBy : "title", 
			sortOrder : "ascending" 
		}).execute(function (response) { 
			if (response.error) { 
				alert("Error " + response.error.code + " reading groups. Error message was: " + response.error.message); 
			} 
			else { 
				if (response.list) {

					var groups = response.list; 
					var html = "";
										$(groups).each(function(index, group) 					{
												html += "<option value=" + group.id + ">" + group.title + "</option>";
			         
        				});
					 					$("#selectgroup").html(html);
  					  					gadgets.window.adjustHeight();
				}
			} 
		});
	} else if (typeID == "@all" ) {

		osapi.groups.get({ 
			userId : "@me", 
			groupId : "@all", 
			sortBy : "title", 
			sortOrder : "ascending" ,
			count : 10
		}).execute(function (response) { 
			if (response.error) { 
				alert("Error " + response.error.code + " reading groups. Error message was: " + response.error.message); 
			} 
			else { 
				if (response.list) {
					var groups = response.list; 
					var html = "";
																	$(groups).each(function(index, group) 					{
																		html += "<option value=" + group.id + ">" + group.title + "</option>";
			         
        				});
					 																								$("#selectgroup").html(html);
  					  												gadgets.window.adjustHeight();
				}
			} 
		});
	} // end else if
    });

 });