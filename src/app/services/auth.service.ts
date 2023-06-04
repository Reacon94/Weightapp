import { Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as auth from 'firebase/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IUser } from '../modal/iuser';






@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private usersCollection: AngularFirestoreCollection<IUser>
  result: any
  userID:any

  constructor(
    private afA: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
 
  ) { 
    this.usersCollection = afs.collection("users") 
    
  }

  ngOnInit(): void {

  }

  async logInWithGoogle() {
    try {
      this.result = await this.afA.signInWithPopup(new auth.GoogleAuthProvider());
      this.router.navigate(["dashboard"]);
      
      
      const userDocRef = this.usersCollection.doc(this.result.user?.uid);
      const userDoc = await userDocRef.get().toPromise();
      
      

      if (!userDoc?.exists) {
        await userDocRef.set({
          displayName: this.result.user?.displayName as string,
          email: this.result.user?.email as string,
          uid: this.result.user?.uid as string
        });
      }

      await localStorage.setItem('userID', this.result.user?.uid);
    } catch (error) {
      window.alert(error);
    }
  }


  async signOut() {
    await this.afA.signOut()
    return this.router.navigate(["/"])
  }


}
