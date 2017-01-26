$.getJSON('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function(data){
    
    var svg = d3.select(".chart").attr("width", 1200).atttr("height", 400)
    
//    d3.select('.chart')
//        .selectAll('g')
//        .data(data.data)
//        .enter()
//        .append('div')
//        .text(function(d){ return d[1];})
//        .attr('class', 'data')
//        .style('height', '10px')
//        .style('width', '10px');
//    
    svg.selectAll("rect").data(data.data).enter().append("rect").text(function(d){ return d[1];});
	
});


