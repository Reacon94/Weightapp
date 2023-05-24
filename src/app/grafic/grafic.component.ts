import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { WeightdataService } from '../shared/weightdata.service';



@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})
export class GraficComponent implements OnInit,OnChanges {

    weightData: any[] = []
    dateData: any[] = []

    constructor(private dataService: WeightdataService) {
    }

    ngOnInit(): void {
      this.dataService.getWeights().pipe(
       
      ).subscribe(actualdata => {
         actualdata.map(x => {
          this.weightData.push(x.weight);
          this.dateData.push(x.date);
          console.log(this.weightData,"weight")
          console.log(this.dateData,"date")
        })
        this.chartData = [
          {
            data: this.weightData,
            label: 'Weight in kg'
          }
        ];
      });

    }

    ngOnChanges(): void {
  
    }

    

    // Chart.js options
    public chartOptions = {
      responsive: true
    };

    public chartData = [
      { 
        data: [] as any,
        label: 'Weight in kg' 
      }

    ];
    
    // Chart.js labels
    public chartLabels = [10,10,10,10];
    
    // Chart.js type
    public chartType = 'line';

}
