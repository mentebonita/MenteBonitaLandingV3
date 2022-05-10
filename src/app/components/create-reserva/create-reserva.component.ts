import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspecialistaService } from 'src/app/services/especialista.service';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-create-reserva',
  templateUrl: './create-reserva.component.html',
  styleUrls: ['./create-reserva.component.css']
})
export class CreateReservaComponent implements OnInit{
  createReserva: FormGroup;
  submitted= false;
  loading=false;
  especialistas: any[]=[];
  constructor(private fb: FormBuilder, private reservaService: ReservaService,private _especialistaService: EspecialistaService, private router:Router,
     private toastr: ToastrService){

    this.createReserva = this.fb.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        correo: ['',Validators.required],
        telefono: ['',Validators.required],
      })
  }

  ngOnInit(): void {
    this.getEspecialistas();
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
    this.loading=true;
    this.reservaService.agregarReserva(reserva).then(() =>{
      this.toastr.success('Ha registrado su reserva en Mente Bonita','Reserva registrado',{positionClass:'toast-bottom-right'});
      this.loading=false;
      this.router.navigate(['/fin-reserva']);
    }).catch(error =>{
      console.log(error);
      this.loading=false;
    }
      )

    }
    getEspecialistas(){
      this._especialistaService.listEspecialista().subscribe(data =>{
        console.log(data);
      });
    }
  }
