

gadgets.util.registerOnLoadHandler(function() {

  $("#typeofrelationship").change(function() {
	
	var typeID = $("#typeofrelationship").val();
	$("#selectgroup").html("");
	if (typeID == "@self" ) {
	$("#grouptable").css("display","block");
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
		$("#grouptable").css("display","block");
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
	else {
		$("#grouptable").css("display","none");
	}
    });

	






// Button click
	$("#displaygraph").click(function() {
	gadgets.window.adjustHeight();
	$("#chart").html("");
try {
	 	var margin = {top: 100, right: 800, bottom: 400, left: 100},
	    	width = 960 - margin.left - margin.right,
	    	height = 500 - margin.top - margin.bottom;

	 	var x = d3.scale.linear()
	    		.range([0, width]);

		var y = d3.scale.linear()
	    		.range([height, 0]);
		 	

		var color = d3.scale.category20();


		var force = d3.layout.force()
			//.gravity(0.06)
	    		.charge(-120)
	   		// .linkDistance(30)
	    		.size([width, height]);

		var svg = d3.select("#chart").append("svg")
	    		.attr("width", width + margin.left + margin.right)
	    		.attr("height", height + margin.top + margin.bottom)
	  		.append("svg:g")
	    		//.attr("transform", "translate(" + width / 4 + "," + height / 3 + ")");
	    		.attr("transform", "translate(" + margin.left + "," + margin.top +")");
    			//.call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", 10))
    			//.append("svg:g");

		// d3.json("http://localhost:8080/JiveDataVizsWeb/jivegraph/dataviz/nodes", function(json) {
	  	//d3.json("mynodes2.json", function(json) {
		
		var json = {"graphNodeDetails":{"links":[{"source":1,"target":0,"value":1},{"source":2,"target":0,"value":88},{"source":3,"target":0,"value":10},{"source":3,"target":2,"value":6},{"source":4,"target":0,"value":1},{"source":5,"target":0,"value":1},{"source":6,"target":0,"value":1},{"source":7,"target":0,"value":1},{"source":8,"target":0,"value":2},{"source":9,"target":8,"value":500},{"source":9,"target":10,"value":20}],"nodes":[{"group":1,"name":"Myriel","value":2},{"group":1,"name":"Napoleon","value":10},
{"group":1,"name":"Mlle.Baptistine","value":2},{"group":1,"name":"Mme.Magloire","value":2},{"group":1,"name":"CountessdeLo","value":2},{"group":1,"name":"Geborand","value":2},{"group":11,"name":"Champtercier","value":21},{"group":1,"name":"Cravatte","value":41},{"group":4,"name":"Count","value":1},{"group":3,"name":"OldMan","value":2},{"group":2,"name":"Labarre","value":13}]}}

	  	force
	      	.nodes(json.graphNodeDetails.nodes)	      
	      	.links(json.graphNodeDetails.links)	
	      	.linkDistance(function(d) { return (1/d.value) * 100; })   
	      	.start();
	 
	  	var link = svg.selectAll("line.link")
	        .data(json.graphNodeDetails.links);
	    	link.enter().append("line")
	        .attr("class", "link")
	        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

	  	var node = svg.selectAll("circle.node")
	        .data(json.graphNodeDetails.nodes);
	    	node.enter().append("circle")
	        .attr("class", "node")
	        .attr("r", function(d) { return d.value; })
	        .style("fill", function(d) { return color(d.group); })
	     	// .on("mouseover", fade(.1, true))
         	// .on("mouseout", normalizeNodesAndRemoveLabels())
	        .call(force.drag);

	  	node.append("title")
	        .text(function(d) { return d.name; });

	  	force.on("tick", function() {
	    		link.attr("x1", function(d) { return d.source.x; })
	        	.attr("y1", function(d) { return d.source.y; })
	        	.attr("x2", function(d) { return d.target.x; })
	        	.attr("y2", function(d) { return d.target.y; });

	    	node.attr("cx", function(d) { return d.x; })
	        .attr("cy", function(d) { return d.y; });
	  });
	//});
		 	
		} catch(err) {
			alert("Error" + err.message);
		}
gadgets.window.adjustHeight();

 	});

 });