import { Component,OnInit,} from '@angular/core';
import { WeightdataService } from '../services/weightdata.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";




@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})
export class GraficComponent implements OnInit {

    weightData: any[] = []
    dateData: any[] = []
    bmiData: any[] = []
    result: any
    inputId: any[] = []

    constructor(
      public dataService: WeightdataService
      ) {}

    ngOnInit(): void {
      

      this.dataService.getChanges().subscribe((data:any) => {
        this.weightData = [];
        this.dateData = [];
        this.bmiData = [];
        this.inputId = [];

       
        

        data.map((data:any) => {
          this.weightData.push(data['weight'])
          this.dateData.push(data['date'])
          this.bmiData.push(data['bmi'])
          this.inputId.push(data['id'])
        })

        this.chartData = [
          {
            data:this.weightData,
            label:""
          }
        ]
        this.chartLabels = this.dateData
      })
     
    }

    async setCurrentUserID(): Promise<void> {
      
    }

    public chartOptions = {
      responsive: true
    };

    public chartData = [
      { 
        data: [] as any,
        label:  "" 
      }

    ];
    
    public chartLabels = [] as any;
    
    public chartType = 'line';

}

