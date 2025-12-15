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
import { BeneficiosComponent } from './components/beneficios/beneficios';
import { RegistroComponent } from './components/precios/registro/registro.component';
import { PagoComponent } from './components/precios/pago/pago.component';
import { TarjetaComponent } from './components/precios/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/precios/loading/loading.component';
import { EjerciciosComponent } from './components/alta/ejercicios/ejercicios.component';
import { DominadasComponent } from './components/alta/ejercicios/espalda/dominadas.component';
import { SaludComponent } from './components/alta/salud/salud.component';
import { DaikinComponent } from './components/precios/equipos/aire-acondicionado/daikin/daikin.component';
import { MitsubishiComponent } from './components/precios/equipos/aire-acondicionado/mitsubishi/mitsubishi.component';
import { FujitsuComponent } from './components/precios/equipos/aire-acondicionado/fujitsu/fujitsu.component';
import { PanasonicComponent } from './components/precios/equipos/aire-acondicionado/panasonic/panasonic.component';
import { LgComponent } from './components/precios/equipos/aire-acondicionado/lg/lg.component';
import { SamsungComponent } from './components/precios/equipos/aire-acondicionado/samsung/samsung.component';
import { BaxiComponent } from './components/precios/equipos/aire-acondicionado/baxi/baxi.component';
import { ToshibaComponent } from './components/precios/equipos/aire-acondicionado/toshiba/toshiba.component';
import { DaitsuComponent } from './components/precios/equipos/aire-acondicionado/daitsu/daitsu.component';
import { HiyasuComponent } from './components/precios/equipos/aire-acondicionado/hiyasu/hiyasu.component';
import { HtwComponent } from './components/precios/equipos/aire-acondicionado/htw/htw.component';
import { HisenseComponent } from './components/precios/equipos/aire-acondicionado/hisense/hisense.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ViessmannComponent } from './components/precios/equipos/calefaccion/viessmann/viessmann.component';
import { VaillantComponent } from './components/precios/equipos/calefaccion/vaillant/vaillant.component';
import { JunkersComponent } from './components/precios/equipos/calefaccion/junkers/junkers.component';
import { AristonComponent } from './components/precios/equipos/calefaccion/ariston/ariston.component';
import { BdrComponent } from './components/precios/equipos/calefaccion/bdr/bdr.component';
import { SaunierComponent } from './components/precios/equipos/calefaccion/saunier/saunier.component';
import { FerroliComponent } from './components/precios/equipos/calefaccion/ferroli/ferroli.component';
import { DaikinCalefaccionComponent } from './components/precios/equipos/calefaccion/daikin/daikin.component';
import { MitsubishiCalefaccionComponent } from './components/precios/equipos/calefaccion/mitsubishi/mitsubishi.component';
import { PanasonicCalefaccionComponent } from './components/precios/equipos/calefaccion/panasonic/panasonic.component';
import { ElectricidadComponent } from './components/electricidad/electricidad';






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
    ElectricidadComponent,
    InformacionUsuarioComponent,
    AltaComponent,
    DietaDefinicionComponent,
    DietaVolumenComponent,
    DietaEquilibrioComponent,
    InvitadoAdministradorComponent,
    NosotrosComponent,
    AtencionClienteComponent,
    BeneficiosComponent,
    RegistroComponent,
    PagoComponent,
    TarjetaComponent,
    LoadingComponent,
    EjerciciosComponent,
    DominadasComponent,
    SaludComponent,
    PreciosComponent,
    DaikinComponent,
    MitsubishiComponent,
    FujitsuComponent,
    PanasonicComponent,
    LgComponent,
    SamsungComponent,
    BaxiComponent,
    ToshibaComponent,
    DaitsuComponent,
    HiyasuComponent,
    HtwComponent,
    HisenseComponent,
    ViessmannComponent,
    VaillantComponent,
    JunkersComponent,
    AristonComponent,
    BdrComponent,
    SaunierComponent,
    FerroliComponent,
    MitsubishiCalefaccionComponent,
    DaikinCalefaccionComponent,
    PanasonicCalefaccionComponent
    
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
