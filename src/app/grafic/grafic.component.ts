import { Component,OnInit } from '@angular/core';
import { WeightdataService } from '../shared/weightdata.service';



@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})
export class GraficComponent implements OnInit {

    weightData: any
    dateData: any

    constructor(private dataService: WeightdataService) {
      this.weightData = 0;
    }

    ngOnInit(): void {
      this.dataService.getWeights().subscribe(actualdata => {
         actualdata.map(x => {
         this.weightData = x.weight
         this.dateData = x.date
        })
        this.updateChartData()
        this.updateChartLabels()
        console.log(this.dateData)
      });

    }



    // Chart.js options
    public chartOptions = {
      responsive: true
    };

    public chartData = [
      this.updateChartData()
    ];
    
  
    // Chart.js data
    updateChartData() {
        let chartData = 
          { 
            data: this.weightData,
            label: 'Weight in kg' 
          }
        return chartData
    }

    updateChartLabels() {
      let chartLabel = []


      
    }

  
    // Chart.js labels
    public chartLabels =
     [
     ];
    
    // Chart.js type
    public chartType = 'line';

}
