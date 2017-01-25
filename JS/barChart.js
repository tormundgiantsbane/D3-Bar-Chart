$.getJSON('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', function(data){
    
    d3.select('.chart')
        .selectAll('g')
        .data(data.data)
        .enter()
        .append('div')
        .text(function(d){ return d[1];})
        .attr('class', 'data')
        .style('height', '10px')
        .style('width', '10px');
	
});


