

gadgets.util.registerOnLoadHandler(function() {

  $("#typeofrelationship").change(function() {
	var typeID = $("#typeofrelationship").val();
	if (typeID == "@all" ) {
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
						alert(group.id);
						alert(group.name);
						html += "<option value=" + group.id + ">" + group.name + "</option>";
			         
        				});
					alert(html);
 					$("#selectgroup").html(html);
  					  					gadgets.window.adjustHeight();
				}
			} 
		});
	}
    });

 });