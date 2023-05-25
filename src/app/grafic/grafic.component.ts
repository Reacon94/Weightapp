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
    bmiData: any[] = []

    constructor(private dataService: WeightdataService) {
    }

    ngOnInit(): void {
      this.dataService.getWeights().subscribe(actualdata => {
         
          this.dateData = [];
          this.weightData = [];

         actualdata.forEach(x => {
          this.weightData.push(x.weight);
          this.dateData.push(x.date);
          this.bmiData.push(x.bmi)
        })
        this.chartData = [
          {
            data: this.weightData,
            label: `BMI ${this.bmiData} and Weight `
          }
        ];
        this.chartLabels = this.dateData;
      });

    }

    ngOnChanges(): void {
  
    }

    public chartOptions = {
      responsive: false
    };

    public chartData = [
      { 
        data: [] as any,
        label:  `BMI ${this.bmiData} and Weight ` 
      }

    ];
    
    public chartLabels = [] as any;
    
    public chartType = 'line';

    onChartClick(event: any) {
      if (event.active && event.active.length > 0) {
        const dataIndex = event.active[0].index;
        const weight = this.weightData[dataIndex];

    }
  }
}

