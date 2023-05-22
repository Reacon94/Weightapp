import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent {

  weightValue: number = 0;
  dateValue?: Date;

  addData() {
    const data = {
      weight: this.weightValue,
      date: this.dateValue,
      bmi: this.calculateBMI(this.weightValue)
    };

    // Add logic to store the data or update the chart
    console.log(data);
  }

  calculateBMI(weight: number): number {
    // Add logic to calculate BMI
    // BMI calculation formula: BMI = weight / (height * height)
    // You can customize this calculation based on your requirements
    const height = 1.8; // Assuming a fixed height of 1.8 meters
    const bmi = weight / (height * height);
    return bmi;
  }

}
