import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-especialistas',
  templateUrl: './list-especialistas.component.html',
  styleUrls: ['./list-especialistas.component.css']
})
export class ListEspecialistasComponent implements OnInit {
  especialistas: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.especialistas = firestore.collection('especialistas').valueChanges();
   }

  ngOnInit() {
  }

}
