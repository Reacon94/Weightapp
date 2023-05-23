import { Injectable} from '@angular/core';
import { Idata } from './Idata';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeightdataService {
  private weightsSubject: BehaviorSubject<Idata[]> = new BehaviorSubject<Idata[]>([]);

  weightsdata: Idata[] = []


  addWeight (data: Idata) {

    this.weightsdata.push(data)
    this.weightsSubject.next(this.weightsdata)
  
  }

  getWeights() {
    return this.weightsSubject.asObservable();
  }

}
