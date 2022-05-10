import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  constructor(private  firestore: AngularFirestore) {

   }
   listEspecialista():Observable<any>{
    return this.firestore.collection('especialistas').valueChanges();
   }
}
