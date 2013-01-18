var instanceURL = "https://sandbox.jiveon.com/api/core/v3/";
gadgets.util.registerOnLoadHandler(function() {
	$("#caSelectGroup").click(function() {
		$("#capbdata").css("display","block");
		loadingImage();
		osapi.jive.corev3.places.requestPicker({
			type : "group",
			success : function(data) {
				
				var content = renderPlaceOnTable(data);
				$("#caGroupName").html(content);
				//var responseJson = gadgets.json.stringify(data);
				//alert(gadgets.json.stringify(data));
				getMostContributedData(data.resources.activity.ref);
				$("#hidActivityUrl").val(data.resources.activity.ref);
				
			}
		});
	});
	
	
	
});

	function displayCBData(data) {
		var content="";
		var userSize = 0;
		var userIndex ;
			
		if($.isArray(data)) {
			for(var i = 0; i < data.length; i++) {
				userSize = data[i].users.length;
				content += "<tr>";
				content += '<td style="width:100%">';
				content += '<div class="container" style="background:#CAD9EC;">';
				content += '<b class="rtop"><b class="r1" style="background:#CAD9EC;"></b> <b class="r2" style="background:#CAD9EC;"></b> <b class="r3" style="background:#CAD9EC;"></b> <b class="r4" style="background:#CAD9EC;"></b></b>';
				
				content += '<table style="width:100%;">';
				
				content += "<tr>";
				content += '<td rowspan="'+userSize+ '" style="margin-right:15px;">' + '&nbsp;&nbsp;<a href="'+data[i].contentURL+'"> <div style="font-size:'+getFontSize(data[i].users)+';">' + data[i].contentName + '</div></a> </td>';
				userIndex = 0;
				if ($.isArray(data[i].users)) {
					for(var j = 0; j < userSize; j++) {

						if (userIndex < 3 || userSize == 4 ) {
							if (userIndex > 0) {
								content += "<tr>";
							}
							content += '<td width="10%">' + '<a href="'+data[i].users[j].user.userProfileUrl+'">' + '<img height="40" width="40" src="' + data[i].users[j].user.avatarUrl + '"/> </a>' + '</td>';
							content += "</tr>";
							userIndex = userIndex + 1;
						}
						
					}
					if (userSize > 4 ) {
						var userHTML = getUserDataHtml(data[i].users,i);
						content += '<tr>'
						content += '<td style="vertical-align:middle;">';
						content += '<input type="button" value="......." name="moreUsers" id="moreUsers" style="width:40px;height:40px;" onclick="displayUsersInWidgetB('+i+');" data-id="divuser'+i+'" >';
						content += userHTML;
						content += '</td>'
						content += "</tr>";
					}
					
				} else {
					content += '<td width="10%">'  + '<a href="'+data[i].users.user.userProfileUrl+'">' + '<img height="40" width="40" src="' + data[i].users.user.avatarUrl + '"/> </a>' + '</td>';
					content += "</tr>";
				}
				content += '</table>';
				content += '<b class="rbottom"><b class="r4" style="background:#d3d3d3;"></b> <b class="r3" style="background:#d3d3d3;"></b> <b class="r2" style="background:#d3d3d3;"></b> <b class="r1" style="background:#d3d3d3;"></b></b>';
				content += '</div>';
				content += '</td>';
				content += '</tr>';
				
				content += '<tr style="height:5px;">';
				content += '<td>';
				content += '</td>';
				content += '</tr>';
	
			}
		}
		else {
			content += "<tr>";
			content += '<td style="width:100%">';
			content += '<div class="container" style="background:#d3d3d3;">';
			content += '<b class="rtop"><b class="r1" style="background:#d3d3d3;"></b> <b class="r2" style="background:#d3d3d3;"></b> <b class="r3" style="background:#d3d3d3;"></b> <b class="r4" style="background:#d3d3d3;"></b></b>';		
			content += '<table style="width:100%;">';
			
			content += "<tr>";
			content += '<td>' + '&nbsp;&nbsp;<a href="'+data.contentURL+'"> <div style="font-size:'+getFontSize("")+';">' + data.contentName + '</div></a> </td>';
			content += "<td> " + '<a href="'+data.users.user.userProfileUrl+'">' + '<img height="45" width="45" src="' + data.users.user.avatarUrl + '"/> </a>' + '</td>';
			content += "</tr>";
			
			content += '</table>';
			content += '<b class="rbottom"><b class="r4" style="background:#d3d3d3;"></b> <b class="r3" style="background:#d3d3d3;"></b> <b class="r2" style="background:#d3d3d3;"></b> <b class="r1" style="background:#d3d3d3;"></b></b>';
			content += '</div>';
			content += '</td>';
			content += '</tr>';
		}
	
		$("#user-capb-content").html(content);
	}

	function getFontSize(userData) {
		var fontSize = "12px";
		if ($.isArray(userData)) {
			if(userData.length > 3) {
				fontSize = "20px";		
			} else if (userData.length == 3) {
				fontSize = "18px";	
			} else if (userData.length = 2) {
				fontSize = "15px";	
			}
		}
		
		return fontSize;
	}
	
	function getUserDataHtml(usersObj,index) {
		
 		var html= "";
 		html += '<div id="div_modal-getusers_'+index +'" style="display: none;">';
 		html += '<header><h2>More Users</h2></header>';
 		html += '<a class="j-modal-close-top close" href="#">Close <span class="j-close-icon j-ui-elem"></span></a>';
 		html += '<div class="jive-modal-content clearfix">';
 		html += '<table> <tr>';
 		var usersize = usersObj.length; 
 		
 		for(var j = 0; j < usersize; j++) {
 			html +='<td style="vertical-align:middle;">';
 			html +='<a href="'+usersObj[j].user.userProfileUrl+'">' + '<img height="35" width="35" src="' + usersObj[j].user.avatarUrl + '"/> </a>';
 			html +='</td>';
 			html +='<td>&nbsp;</td>';	
 		}
 		html += '</tr></table></div>';
 		return html;		
}


	function getMostContributedData(activityUrl) {
	
		
		$(document).ready(function(){

			$.ajax({
			
				//url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/ca/mostcontributed?url='+activityUrl+'&instanceURL='+instanceURL,
				url: 'http://svecas001:8090/CollaborativeAwarenessApp/collabaware/cab/team/jsonP?url='+activityUrl+'&instanceURL='+instanceURL,
				dataType: 'jsonp',
				type: 'GET',
				crossDomain:true,
				success: function(result) {

					displayCBData(result.data);

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
		
		content += '<td align="center">' + '<img src="https://raw.github.com/catherinml/dataAnalyticsCaB/master/images/ajax-loader.gif" /> </td>';
		content += "</tr>";
		$("#user-capb-content").html(content);
	}
	
	function displayUsersInWidgetB(index){
		var $divUserList = $('#div_modal-getusers_'+index).html();		
		$("#modal-getcapbusers").html($divUserList).lightbox_me();
	}
