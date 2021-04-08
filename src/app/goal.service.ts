import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private firestore: AngularFirestore) { }

  createGoal(data){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("goals")
          .add(data)
          .then(res => {}, err => reject(err));
  });
  }

  getGoals(){
      return this.firestore.collection("goals").snapshotChanges();
  }

  deleteGoal(data) {
    return this.firestore.collection("goals").doc(data.payload.doc.id).delete();
 }

 updateGoal(data, description) {
   console.log(description)
  return this.firestore.collection("goals").doc(data.payload.doc.id).set({ description: description }, { merge: true });
}
}
