import { Component, OnInit } from '@angular/core';
declare var $: any;
import { Chart } from 'chart.js';

@Component({
  selector: 'app-js-reports',
  templateUrl: './js-reports.component.html',
  styleUrls: ['./js-reports.component.css']
})
export class JsReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      


      var ctx = $('#areaChart').get(0).getContext('2d')
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: 'Electronics',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgba(210, 214, 222,0.2)",
          }, {
            label: 'Digital Goods',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "rgba(60,141,188,0.9)",
          }
        ]
        }
      });
      
      //-------------
      //- LINE CHART -
      //--------------

      var ctx = $('#lineChart').get(0).getContext('2d')
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: 'Electronics',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: "#3e95cd",
            fill: false
          }, {
            label: 'Digital Goods',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: "#8e5ea2",
            fill: false
          }
        ]
        }
      });

      // new Chart(document.getElementById("lineChart"), {
      //   type: 'line',
      //   data: {
      //     labels: ["January", "February", "March", "April", "May", "June", "July"],
      //     datasets: [{ 
      //         data: [65, 59, 80, 81, 56, 55, 40],
      //         label: "Electronics",
      //         borderColor: "#3e95cd",
      //         fill: false
      //       }, { 
      //         data: [28, 48, 40, 19, 86, 27, 90],
      //         label: "Digital Goods",
      //         borderColor: "#8e5ea2",
      //         fill: false
      //       }
      //     ]
      //   }
      // });










      // var ctx = $('#lineChart').get(0).getContext('2d')
      // var myChart = new Chart(ctx, {
      //   type: 'line',
      //   data: {
      //     labels: ["January", "February", "March", "April", "May", "June", "July"],
      //     datasets: [{
      //       label: 'Electronics',
      //       data: [65, 59, 80, 81, 56, 55, 40],
      //       backgroundColor: "rgba(210, 214, 222, 1)",
      //       strokeColor: "rgba(210, 214, 222, 1)",
      //       pointColor: "rgba(210, 214, 222, 1)",
      //       pointStrokeColor: "#c1c7d1",
      //       pointHighlightFill: "#fff",
      //       pointHighlightStroke: "rgba(220,220,220,1)",
      //     }, {
      //       label: 'Digital Goods',
      //       data: [28, 48, 40, 19, 86, 27, 90],
      //       backgroundColor: "rgba(60,141,188,0.9)",
      //       pointColor: "#3b8bba",
      //       pointStrokeColor: "rgba(60,141,188,1)",
      //       pointHighlightFill: "#fff",
      //       pointHighlightStroke: "rgba(60,141,188,1)",
      //     }]
      //   }
      // });










      // var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
      // var lineChart = new Chart(lineChartCanvas,{
      //     type: 'line',
      //     data: areaChartData,
      //     options: lineChartOptions
      // })
      // var lineChartOptions = areaChartOptions
      // lineChartOptions.datasetFill = false;

     // lineChart.Line(areaChartData, lineChartOptions)
  
      //-------------
      //- PIE CHART -
      //-------------

      var ctx =  $("#pieChart").get(0).getContext("2d");
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"],
          datasets: [{
            backgroundColor: [
              "#f56954",
              "#00a65a",
              "#f39c12",
              "#00c0ef",
              "#981a1e",
              "#d2d6de",
            ],
            data: [700, 500, 400, 600, 300, 100]
          }]
        }
      });



      // Get context with jQuery - using jQuery's .get() method.
    //   var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    //   var pieChart = new Chart(pieChartCanvas);
    //   var PieData = [
    //     {
    //       value: 700,
    //       color: "#f56954",
    //       highlight: "#f56954",
    //       label: "Chrome"
    //     },
    //     {
    //       value: 500,
    //       color: "#00a65a",
    //       highlight: "#00a65a",
    //       label: "IE"
    //     },
    //     {
    //       value: 400,
    //       color: "#f39c12",
    //       highlight: "#f39c12",
    //       label: "FireFox"
    //     },
    //     {
    //       value: 600,
    //       color: "#00c0ef",
    //       highlight: "#00c0ef",
    //       label: "Safari"
    //     },
    //     {
    //       value: 300,
    //       color: "#981a1e",
    //       highlight: "#981a1e",
    //       label: "Opera"
    //     },
    //     {
    //       value: 100,
    //       color: "#d2d6de",
    //       highlight: "#d2d6de",
    //       label: "Navigator"
    //     }
    //   ];
    //   var pieOptions = {
    //     //Boolean - Whether we should show a stroke on each segment
    //     segmentShowStroke: true,
    //     //String - The colour of each segment stroke
    //     segmentStrokeColor: "#fff",
    //     //Number - The width of each segment stroke
    //     segmentStrokeWidth: 2,
    //     //Number - The percentage of the chart that we cut out of the middle
    //     percentageInnerCutout: 50, // This is 0 for Pie charts
    //     //Number - Amount of animation steps
    //     animationSteps: 100,
    //     //String - Animation easing effect
    //     animationEasing: "easeOutBounce",
    //     //Boolean - Whether we animate the rotation of the Doughnut
    //     animateRotate: true,
    //     //Boolean - Whether we animate scaling the Doughnut from the centre
    //     animateScale: false,
    //     //Boolean - whether to make the chart responsive to window resizing
    //     responsive: true,
    //     // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    //     maintainAspectRatio: true,
    //     //String - A legend template
    //     legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    //   };
    //   //Create pie or douhnut chart
    //   // You can switch between pie and douhnut using the method below.
    //  // pieChart.Doughnut(PieData, pieOptions);

    //   pieChart = new Chart(pieChartCanvas,{
    //     type: 'pie',
    //     data: PieData,
    //     options: pieOptions
    //   })
     





      //-------------
      //- BAR CHART -
      //-------------

      // var barChartCanvas = $("#barChart").get(0).getContext("2d");
      var ctx = $("#barChart").get(0).getContext('2d');

      var original = Chart.defaults.global.legend.onClick;
      Chart.defaults.global.legend.onClick = function(e, legendItem) {
        update_caption(legendItem);
        original.call(this, e, legendItem);
      };
      
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "Electronics",
            backgroundColor: "rgba(210, 214, 222, 1)",
            strokeColor: "rgba(210, 214, 222, 1)",
            pointColor: "rgba(210, 214, 222, 1)",
            pointStrokeColor: "#c1c7d1",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          }, {
            label: "Digital Goods",
            backgroundColor: "rgba(72,159,87,0.9)",
            strokeColor: "rgba(60,141,188,0.8)",
            pointColor: "rgba(60,141,188,1)",
            pointStrokeColor: "#3b8bba",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(60,141,188,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }]
        }
      });
      
      var labels = {
        "Electronics": true,
        "Digital Goods": true
      };
      
      var caption = document.getElementById("caption");
      
      var update_caption = function(legend) {
        labels[legend.text] = legend.hidden;
      
        var selected = Object.keys(labels).filter(function(key) {
          return labels[key];
        });
      
        var text = selected.length ? selected.join(" & ") : "nothing";
      
        caption.innerHTML = "The chart is displaying " + text;
      };






      //-------------
      //- BAR CHART -
      //-------------
      // var barChartCanvas = $("#barChart").get(0).getContext("2d");
      // var barChart = new Chart(barChartCanvas);
      // var barChartData = areaChartData;
      // barChartData.datasets[1].fillColor = "#00a65a";
      // barChartData.datasets[1].strokeColor = "#00a65a";
      // barChartData.datasets[1].pointColor = "#00a65a";
      // var barChartOptions = {
      //   //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      //   scaleBeginAtZero: true,
      //   //Boolean - Whether grid lines are shown across the chart
      //   scaleShowGridLines: true,
      //   //String - Colour of the grid lines
      //   scaleGridLineColor: "rgba(0,0,0,.05)",
      //   //Number - Width of the grid lines
      //   scaleGridLineWidth: 1,
      //   //Boolean - Whether to show horizontal lines (except X axis)
      //   scaleShowHorizontalLines: true,
      //   //Boolean - Whether to show vertical lines (except Y axis)
      //   scaleShowVerticalLines: true,
      //   //Boolean - If there is a stroke on each bar
      //   barShowStroke: true,
      //   //Number - Pixel width of the bar stroke
      //   barStrokeWidth: 2,
      //   //Number - Spacing between each of the X value sets
      //   barValueSpacing: 5,
      //   //Number - Spacing between data sets within X values
      //   barDatasetSpacing: 1,
      //   //String - A legend template
      //   legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //   //Boolean - whether to make the chart responsive
      //   responsive: true,
      //   maintainAspectRatio: true
      // };
  
      //barChartOptions.datasetFill = false;
      //barChart.Bar(barChartData, barChartOptions);
    });
  }

}
