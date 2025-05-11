import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { DetailUsuarioComponent } from './components/usuarios/detail-usuario/detail-usuario.component';
import { NewUsuarioComponent } from './components/usuarios/new-usuario/new-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { MenuComponent } from './components/ui/menu/menu.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Importado
import { InformacionUsuarioComponent } from './components/informacion/informacion.usuario.component';
import { AltaComponent } from './components/alta/alta.component';
import { CommonModule } from '@angular/common';
import { DietaDefinicionComponent } from './components/dietas/definicion/dieta-definicion.component';
import { DietaVolumenComponent } from './components/dietas/volumen/dieta-volumen.component';
import { DietaEquilibrioComponent } from './components/dietas/equilibrio/dieta-equilibrio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvitadoAdministradorComponent } from './components/invitado-administrador/invitado-administrador.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AtencionClienteComponent } from './components/atencion/atencion-cliente.component';
import { EntrenamientoSaludComponent } from './components/entrenamiento-salud/entrenamiento-salud.component';
import { RegistroComponent } from './components/precios/registro/registro.component';
import { PagoComponent } from './components/precios/pago/pago.component';
import { TarjetaComponent } from './components/precios/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/precios/loading/loading.component';
import { EjerciciosComponent } from './components/alta/ejercicios/ejercicios.component';
import { DominadasComponent } from './components/alta/ejercicios/espalda/dominadas.component';
import { SaludComponent } from './components/alta/salud/salud.component';





@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    DetailUsuarioComponent,
    NewUsuarioComponent,
    EditUsuarioComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    InformacionUsuarioComponent,
    AltaComponent,
    DietaDefinicionComponent,
    DietaVolumenComponent,
    DietaEquilibrioComponent,
    InvitadoAdministradorComponent,
    NosotrosComponent,
    AtencionClienteComponent,
    EntrenamientoSaludComponent,
    RegistroComponent,
    PagoComponent,
    TarjetaComponent,
    LoadingComponent,
    EjerciciosComponent,
    DominadasComponent,
    SaludComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule // ✅ Agregado aquí
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
