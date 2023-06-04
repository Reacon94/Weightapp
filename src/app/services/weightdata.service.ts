import { Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeightdataService{

  currentUserID: any

  constructor(
    private afS: AngularFirestore,
    private authS: AuthService
    ) {
      this.currentUserID = localStorage.getItem("userID")

  }

  /*
  1st Version to get the Data
 
  getInput(): Observable<Idata[]>{

    return this.afS.collection("users").doc(this.currentUserID).collection("input")
    .get()
    .pipe(
      map(results => {
        return results.docs.map(snap => {
          return {
            id: snap.id,
            ...<any>snap.data()
          }
        })
      })
    )
  
  }*/

  getChanges(){
   return this.afS.collection("users").doc(this.currentUserID).collection("input", ref => ref.orderBy("date", "asc"))
      .snapshotChanges().pipe(   
        map((actions:any) => {
        return actions.map((a:any) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }))
     
  }

  deleteData (id:any) {
    return this.afS.collection("users").doc(this.currentUserID).collection("input").doc(id).delete()
  }



}
