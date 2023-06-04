import { Component, OnInit } from '@angular/core';
import { WeightdataService } from '../services/weightdata.service';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-weight-input',
  templateUrl: './weight-input.component.html',
  styleUrls: ['./weight-input.component.css']
})
export class WeightInputComponent implements OnInit {
  
  currentUserID?:any 
  weightValue!: number 
  dateValue?: Date 
  sizeValue!: number 



  constructor(
    private dataService: WeightdataService,
    private afS: AngularFirestore,
    private afA: AngularFireAuth,
    private authS: AuthService) 
    {
      this.currentUserID = localStorage.getItem("userID")
      
    }

  ngOnInit(): void {
  
  }



  addSub(){
    let bmi : number = this.weightValue / ( this.sizeValue ** 2)
    this.afS.collection("users").doc(this.currentUserID).collection("input").add({
      weight: this.weightValue,
      bmi: Math.ceil(bmi),
      date: this.dateValue?.toLocaleDateString()
    }) 
   

    this.weightValue = 0
  }

} 
 