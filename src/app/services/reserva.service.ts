import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private  firestore: AngularFirestore) { }

  agregarReserva(reserva:any){
    return this.firestore.collection('reserva').add(reserva);

  }
}
