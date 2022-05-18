import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateReservaComponent } from './components/create-reserva/create-reserva.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ContInicioComponent } from './components/contInicio/contInicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { InicioPeruComponent } from './components/inicio-peru/inicio-peru.component';
import { EspecialistasComponent } from './components/especialistas/especialistas.component';
import { PreciosIndividualesPeruComponent } from './components/precios-individuales-peru/precios-individuales-peru.component';
import { ExampleComponent } from './components/example/example.component';
import { AUnPasoDeCrecerComponent } from './components/aUnPasoDeCrecer/aUnPasoDeCrecer.component';
import { PorqueElegirnosComponent } from './components/porqueElegirnos/porqueElegirnos.component';
import { ReservaTuCitaEnTresPasosComponent } from './components/reservaTuCitaEnTresPasos/reservaTuCitaEnTresPasos.component';
import { ProgramaParaEmpresasComponent } from './components/programaParaEmpresas/programaParaEmpresas.component';
import { DescuentoBannerComponent } from './components/descuentoBanner/descuentoBanner.component';
import { GruposDeApoyoComponent } from './components/gruposDeApoyo/gruposDeApoyo.component';
import { UltimosIngresosDelBlogComponent } from './components/ultimosIngresosDelBlog/ultimosIngresosDelBlog.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateReservaComponent,
    CarruselComponent,
    ContInicioComponent,
    CardsComponent,
    InicioPeruComponent,
    EspecialistasComponent,
    PreciosIndividualesPeruComponent,
    ExampleComponent,
    AUnPasoDeCrecerComponent,
    PorqueElegirnosComponent,
    ReservaTuCitaEnTresPasosComponent,
    ProgramaParaEmpresasComponent,
    DescuentoBannerComponent,
    GruposDeApoyoComponent,
    UltimosIngresosDelBlogComponent,
    SuscripcionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    /*provideFunctions(() => getFunctions())*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
