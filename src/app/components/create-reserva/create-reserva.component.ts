import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit{
  especialistas: Observable<any[]>;

  constructor(firestore: AngularFirestore){
    this.especialistas = firestore.collection('especialistas').valueChanges();
  }
  ngOnInit(): void {
  }

}
