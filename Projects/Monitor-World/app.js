$.ajax({
    url: 'https://coronavirus-tracker-api.herokuapp.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: "GET", /* or type:"GET" or type:"PUT" */
    dataType: "json",
    data: {
    },
    success: function (result) {
        console.log(result);
    },
    error: function () {
        console.log("error");
    }
});







const URL_JSON_WORD = 'https://d3js.org/world-50m.v1.json';
const URL_JSON_DATA =  'https://coronavirus-tracker-api.herokuapp.com/v2/locations'; // URL com localidades --coordenadas para  o mapa
const URL_PARTICULAR_COUNTRY = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"; // URL casos por país
const URL_WORLD_STATE = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"; //  // URL situação mundial dos casos 
const URL_JSON_TIME_LINE = "https://coronavirus-tracker-api.herokuapp.com/v2/locations?timelines=1";

const DEF_API =  { // definicoes da api
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "0341a96610mshfd1d9fba2b8e0a6p1fff43jsne24da21b3b00" 
    }
};

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "0341a96610mshfd1d9fba2b8e0a6p1fff43jsne24da21b3b00"
  }
}





/*Mapa do globo*/
$(document).ready(function(){

	var projection = d3.geo.equirectangular();
	var path = d3.geo.path().projection(projection);
	var svg = d3.select('#map-indicator').append('svg');	
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
        d3.select('#population').text(d.country_population);
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






/*$(document).ready(function(){ // populando a tabela de dados a partir do arquivo json
  $.getJSON(URL_PARTICULAR_COUNTRY,DEF_API, function(data){
     var world_data = [];
    $.each(data,function(key, value){
      world_data += '<tr>';
      world_data += '<td>'+ value.total_cases + '</td>';
      world_data += '<td>'+ value.new_cases + '</td>';
      world_data += '<td>'+ value.new_deaths + '</td>';     
      world_data += '</tr>';
    });
    $('#country-table').append(world_data);
  });
});*/



//com api do mapa 
/*$(document).ready(function(){ // populando a tabela de dados a partir do arquivo json API locales 
  $.getJSON(URL_JSON_DATA, function(data){
    var world_data = [];
    $.each(data.locations,function(key, value){
      world_data += '<tr>';
      //world_data += '<td>'+ value.id + '</td>';
      world_data += '<td>'+ value.country+ '</td>';
      world_data += '<td>'+ value.province+ '</td>';
      world_data += '<td>'+ value.latest.confirmed + '</td>';
      world_data += '<td>'+ value.latest.deaths + '</td>';
      //world_data += '<td>'+ '<button><i class="fas fa-chart-line"></button>' + '</td>';         
      world_data += '</tr>';
    });
    $('#country-table').append(world_data);
  });
});*/



/*Conatruindo tabela com rapidapi*/
$(document).ready(function(){ 
$.getJSON(settings, function(data){
   var world_data = [];

    $.each(data.countries_stat,function(key, value){
      if (key >0){
      world_data += '<tr>';      
      world_data += '<td>'+ value.country_name + '</td>';      
      world_data += '<td>'+ value.cases + '</td>'; 
      world_data += '<td>'+ value.deaths + '</td>';  
      world_data += '<td>'+ value.total_recovered + '</td>'; 
     // world_data += '<td>'+ '<button><i class="fas fa-chart-line"></button>' + '</td>';
      world_data += '</tr>';}
    });

    $('#country-table').append(world_data + 1);
  });
});

/*Filtrar  paises na tabela*/
function searchTable() {
  var sift, input, table, tr, td, i, textField;
  input = document.getElementById("inputTable");  
  sift = input.value.toUpperCase();
    table = document.getElementById("country-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        textField = td.textContent || td.innerText;
        if (textField.toUpperCase().indexOf(
  sift) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

/*pegar dados da situação  mundial*/



function getDateWorld(){
  fetch(URL_WORLD_STATE, DEF_API).then(response => response.json().then(data => { 
      
      totalCases = data.total_cases; 
      totalDeaths = data.total_deaths;
      newCases = data.new_cases; 
      newDeaths = data.new_deaths; 
      totalRecovered = data.total_recovered; 
      statisticDate = data.statistic_taken_at;    

      document.getElementById("num-casos").innerHTML = `Confirmados: ${totalCases}`; 
      document.getElementById("num-novos-casos").innerHTML = `Novos Casos: ${newCases}`;
      document.getElementById("num-mortes").innerHTML = `Mortes: ${totalDeaths}`;  
      document.getElementById("num-novas-mortes").innerHTML = `Novas Mortes: ${newDeaths}`;
      document.getElementById("num-recuperados").innerHTML = `Recuperados: ${totalRecovered}`;  
      document.getElementById("atualizacao").innerHTML = `${statisticDate} UTC`;          
  }))
  .catch(err => {
      console.log(err);
  });
}




/*Informações dos casos particulares por pais*/

let inforCountry =[];


async function getCountryDropDow(){ 

// funcao para pegar valores de dados por pais
  await fetch(URL_PARTICULAR_COUNTRY, DEF_API).then(response => response.json().then(data => { // resposta do json    
     
      inforCountry = data.countries_stat;            
      for(var i =0; i< inforCountry.length-1; i++){
        dropwdowSelect = document.getElementById("dropdown1");  
        optionSelect = document.createElement("option");
        dropwdowSelect.appendChild(optionSelect);  
      };
       
       for(var j =0; j< inforCountry.length; j++){
        opt = dropwdowSelect.querySelectorAll("option");
        opt[j+1].textContent = inforCountry[j+1]["country_name"]; 
        opt[j+1].value = inforCountry[j+1]["country_name"];        
      };  


    }))
    .catch(err => {
        console.log(err);
  });
return sortOptions("dropdown1");
}






// Ordenar opções da tag select 
 function sortOptions(id){

  var select = jQuery('#' + id);
  var option = select.val();
  select.html(select.children('option').sort(function (a, b) {
    return a.text === b.text ? 0 : a.text < b.text ? -1 : 1;
  })).val(option);
}

let cases; // armazena todas as informações de uma erva selecionada
let name;
let inforCases; 
let inforDeaths;
let inforRecovered;
let newCases;
let newDeaths;
let tests1m;
let testTotais;
let cases1m;
let mortes1m;



// Captando as variáveis para construção dos gráficos
function buildInforChart(){
  var countrySelect = document.getElementById("dropdown1");
  var result = countrySelect.options[countrySelect.selectedIndex].value;
  var selection  = inforCountry.find( seed => seed.country_name === result );
  name = result;
  inforCases = parseFloat(selection.cases.replace(/[,]+/g, ''));// regex para retirar a ','*/; e parseFloat pra transformar a string em um numero 
  inforDeaths = parseFloat(selection.deaths.replace(/[,]+/g, ''));
  inforRecovered = parseFloat(selection.total_recovered.replace(/[,]+/g, ''));
  newCases = parseFloat(selection.new_cases.replace(/[,]+/g, ''));
  newDeaths = parseFloat(selection.new_deaths.replace(/[,]+/g, ''));
  tests1m = selection.tests_per_1m_population;
  testTotais = selection.total_tests;
  cases1m = selection.total_cases_per_1m_population;
  mortes1m = selection. deaths_per_1m_population;

  document.getElementById("tests").innerHTML = testTotais; 
  document.getElementById("tests-1m").innerHTML = tests1m ; 
  document.getElementById("cases-1m").innerHTML = cases1m; 
 document.getElementById("mortes-1m").innerHTML = mortes1m; 
  //document.getElementById("recovered").innerHTML = `Total de Recuperados: ${inforRecovered}.`; 



  //  inforCasesBrazilString = inforCasesBrazil.replace(/[,]+/g, '');// regex para retirar a ','*/
   //inforNewDeathsBrazil = parseFloat(inforDeathBrazilString) 
}





//Criar gráficos






/*Ativação das funções*/

 getDateWorld();
 getCountryDropDow();

 


























