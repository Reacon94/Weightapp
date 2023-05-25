import { Component } from '@angular/core';
import { WeightdataService } from '../shared/weightdata.service';


@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent {
  
  constructor(private dataService: WeightdataService) {
    
  }

  weightValue: number = 0
  dateValue?: Date 
  sizeValue: number = 0




  addData() {
  let bmi : number = this.weightValue / ( this.sizeValue ** 2)
  


  const result = {
      weight: this.weightValue,
      bmi: Math.ceil(bmi),
      date: this.dateValue?.toLocaleDateString()
    }
    this.dataService.addWeight(result)
    this.weightValue = 0
  }

}
