import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsuariosListComponent } from "./components/usuarios/usuarios-list/usuarios-list.component";
import { DetailUsuarioComponent } from "./components/usuarios/detail-usuario/detail-usuario.component";
import { NewUsuarioComponent } from './components/usuarios/new-usuario/new-usuario.component';
import { EditUsuarioComponent } from "./components/usuarios/edit-usuario/edit-usuario.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { LoginComponent } from "./components/users/login/login.component";
import { loginGuard } from "./guards/login.guard";
import { InformacionUsuarioComponent } from './components/informacion/informacion.usuario.component';
import { AltaComponent } from './components/alta/alta.component';
import { DietasComponent } from "./components/dietas/dietas.component";
import { DietaDefinicionComponent } from './components/dietas/definicion/dieta-definicion.component';
import { DietaVolumenComponent } from './components/dietas/volumen/dieta-volumen.component';
import { DietaEquilibrioComponent } from './components/dietas/equilibrio/dieta-equilibrio.component';
import { InvitadoAdministradorComponent } from './components/invitado-administrador/invitado-administrador.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AtencionClienteComponent } from "./components/atencion/atencion-cliente.component";
import { BeneficiosComponent } from "./components/beneficios/beneficios";
import { RegistroComponent } from './components/precios/registro/registro.component';
import { PagoComponent } from "./components/precios/pago/pago.component";
import { TarjetaComponent } from "./components/precios/tarjeta/tarjeta.component";
import { LoadingComponent } from './components/precios/loading/loading.component';
import { EjerciciosComponent } from './components/alta/ejercicios/ejercicios.component';
import { DominadasComponent } from "./components/alta/ejercicios/espalda/dominadas.component";
import { SaludComponent } from "./components/alta/salud/salud.component";
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








const routes: Routes = [
        { path: 'usuarios', 
            component: UsuariosListComponent,
            canActivate: [loginGuard]
        },
        { path: 'usuarios/new', component: NewUsuarioComponent },
        { path: 'usuarios/edit/:usuarioId', component: EditUsuarioComponent, canActivate: [loginGuard]},
        { path: 'usuarios/:usuarioId', component: DetailUsuarioComponent, canActivate: [loginGuard] },
        { path: 'register', component: RegisterComponent},
        { path: 'login', component: LoginComponent},
        { path: 'components/informacion/usuario', component: InformacionUsuarioComponent },
        { path: 'alta', component: AltaComponent },
        { path: 'components/dietas', component: DietasComponent },
        { path: 'components/dietas/definicion/dieta-definicion', component: DietaDefinicionComponent },
        { path: 'components/dietas/volumen/dieta-volumen', component: DietaVolumenComponent },
        { path: 'components/dietas/equilibrio/dieta-equilibrio', component: DietaEquilibrioComponent },
        { path: 'invitado-administrador', component: InvitadoAdministradorComponent },
        { path: 'nosotros', component: NosotrosComponent },
        { path: 'precios', component: PreciosComponent },
        { path: 'atencion-cliente' , component: AtencionClienteComponent},
{ path: 'beneficios', component: BeneficiosComponent },
            { path: 'registro', component: RegistroComponent },
        { path: 'pago', component: PagoComponent },
        { path: 'tarjeta', component: TarjetaComponent },
        { path: 'procesando', component: LoadingComponent },
        { path: 'acceso', component: InvitadoAdministradorComponent },
        { path: 'components/alta/ejercicios', component: EjerciciosComponent },
        { path: 'components/alta/ejercicios/espalda/dominadas', component: DominadasComponent },
        { path: 'components/alta/salud', component: SaludComponent },
         { path: 'aire-acondicionado/daikin', component: DaikinComponent },
  { path: 'aire-acondicionado/mitsubishi', component: MitsubishiComponent },
  { path: 'aire-acondicionado/fujitsu', component: FujitsuComponent },
  { path: 'aire-acondicionado/panasonic', component: PanasonicComponent },
  { path: 'aire-acondicionado/lg', component: LgComponent },
  { path: 'aire-acondicionado/samsung', component: SamsungComponent },
  { path: 'aire-acondicionado/baxi', component: BaxiComponent },
  { path: 'aire-acondicionado/toshiba', component: ToshibaComponent },
  { path: 'aire-acondicionado/daitsu', component: DaitsuComponent },
  { path: 'aire-acondicionado/hiyasu', component: HiyasuComponent },
  { path: 'aire-acondicionado/htw', component: HtwComponent },
  { path: 'aire-acondicionado/hisense', component: HisenseComponent },
  { path: 'calefaccion/daikin', component: DaikinCalefaccionComponent },
{ path: 'calefaccion/mitsubishi', component: MitsubishiCalefaccionComponent },
{ path: 'calefaccion/panasonic', component: PanasonicCalefaccionComponent },
{ path: 'calefaccion/viessmann', component: ViessmannComponent },
{ path: 'calefaccion/vaillant', component: VaillantComponent },
{ path: 'calefaccion/junkers', component: JunkersComponent },
{ path: 'calefaccion/ariston', component: AristonComponent },
{ path: 'calefaccion/bdr', component: BdrComponent },
{ path: 'calefaccion/saunier', component: SaunierComponent },
{ path: 'calefaccion/ferroli', component: FerroliComponent },

        

        

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{}