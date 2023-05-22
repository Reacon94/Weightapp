import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";


@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})
export class GraficComponent {

    // Chart.js options
    public chartOptions = {
      responsive: true
    };
  
    // Chart.js data
    public chartData = [
      { data: [80, 79, 78, 79, 78, 77, 76], label: 'Weight in kg' }
    ];
  
    // Chart.js labels
    public chartLabels = ['22.05.2023', '23.05.2023', '25.05.2023', '28.05.2023', '30.05.2023', '31.05.2023', '01.06.2023'];
    
    // Chart.js type
    public chartType = 'line';

}
