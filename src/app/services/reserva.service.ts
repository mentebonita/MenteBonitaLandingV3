import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private  firestore: AngularFirestore) {

   }

  agregarReserva(reserva:any): Promise <any>{
    return this.firestore.collection('reserva').add(reserva);


  }
  lisEspecialista(especialista:any): Observable <any>{
   return this.firestore.collection('especialistas').snapshotChanges(especialista);
  }
}
