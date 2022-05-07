import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit{
  createReserva: FormGroup;
  submitted= false;
  constructor(private fb: FormBuilder, private reservaService: ReservaService){
      this.createReserva = this.fb.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        correo: ['',Validators.required],
        telefono: ['',Validators.required]
      })
  }

  ngOnInit(): void {
  }

  agregarReserva(){
    this.submitted = true;

    if(this.createReserva.invalid){
      return;
    }
    const reserva: any = {
      nombre: this.createReserva.value.nombre,
      apellido: this.createReserva.value.apellido,
      correo: this.createReserva.value.correo,
      telefono: this.createReserva.value.telefono,
      fechaCreacion: new Date(),
      fechaActualice: new Date()
    }
    this.reservaService.agregarReserva(reserva).then(() =>{
      console.log('Reserva registrado con exito!');
    }).catch(error =>{
      console.log(error);
    }
      )

    }
  }
