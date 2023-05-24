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




  addData() {
  const result = {
      weight: this.weightValue,
      date: this.dateValue?.toLocaleDateString()
    }
    this.dataService.addWeight(result)
    this.weightValue = 0
  }

}
