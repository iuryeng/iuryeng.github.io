
const URL_JSON_WORD = 'https://d3js.org/world-50m.v1.json';
const URL_JSON_DATA =  'https://coronavirus-tracker-api.herokuapp.com/v2/locations';


$(document).ready(function(){

	var projection = d3.geo.equirectangular();
	var path = d3.geo.path().projection(projection);
	var svg = d3.select('body').append('svg');	
	var g = svg.append("g");
  var result;

	d3.json(URL_JSON_WORD, function(error, data) {
    if (error) console.error(error);
    g.append('path')
      .datum(topojson.feature(data, data.objects.countries))
      .attr('d', path);;
	});
  

  d3.json(URL_JSON_DATA, function(error, data) {
    if (error) 
      console.error(error);      
      result = data.locations;   
            
      g.selectAll('circle')
        .data(result)
        .enter()
        .append('circle') 
        .attr('fill', 'steelblue')
        .attr("opacity", .6) 
        .attr("stroke", "black")        
        .attr('cx', function(d) {
          if (d.coordinates) {
           return projection([d.coordinates["longitude"], d.coordinates["latitude"]])[0];
          }
        })
        .attr('cy', function(d) {
          if (d.coordinates) {
           return projection([d.coordinates["longitude"], d.coordinates["latitude"]])[1];
          }
        })
      .attr('r', 3)      

      .on('mouseover', function(d) {
        d3.select(this).style('fill', 'black'); 
        d3.select('#country').text(d.country);
        //d3.select('#population').text(d.country_population);
        d3.select('#province').text(d.province);
        d3.select('#confirmed').text(d.latest.confirmed);
        d3.select('#deaths').text(d.latest.deaths);
        //d3.select('#recorvered').text(d.latest.recovered);
        d3.select('#last_update').text(d.last_updated);
        d3.select('#card-legend')
          .style('left', (d3.event.pageX + 10) + 'px')
          .style('top', (d3.event.pageY - 70) + 'px')
          .style('display', 'block')
          .style('opacity', 0.8)
      })

      .on('mouseout', function(d) { 
          d3.select(this).style('fill', d.color);
          d3.select('#card-legend')
            .style('display', 'none');
      });


    var zoom = d3.behavior.zoom()
      .on("zoom", function(){
        g.attr("transform", "translate(" +
        d3.event.translate.join(",") + ")scale(" + d3.event.scale + ")");
        g.selectAll("path")
        .attr("d", path.projection(projection));        
    });    
    svg.call(zoom);      
  });
});


