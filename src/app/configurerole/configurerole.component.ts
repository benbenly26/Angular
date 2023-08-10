import Chart from 'chart.js/auto';
import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-configurerole',
  templateUrl: './configurerole.component.html',
  styleUrls: ['./configurerole.component.css']
})
export class ConfigureroleComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'], // X-axis labels
        datasets: [{
          label: 'Users', // Dataset label
          data: [10, 20, 37, 45, 20, 15, 24, 18, 30, 26], // Dataset values
          borderColor: "#7610C6", // Line color
          fill: false, // Disable filling area under the line
          pointBorderWidth: 3, // Customize the dot border thickness
          pointBackgroundColor: 'rgb(255,255,255)', // Customize the dot color
          pointBorderColor: '#FF30A1', // Pointer Border Color
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: '#ffffff' // Customize the x-axis color
            }
          },
          y: {
            beginAtZero: true, // Point starts from
          },
        }
      }
    });
  }

  values: any;
  value: any;

  constructor() {
  }

  ngOnInit(): void {

  };
  getDetails(){
    console.log("The Value is " + this.values)
  }


  onSearch(){
    console.log('Form have errors ' + this.value);
  }
};
