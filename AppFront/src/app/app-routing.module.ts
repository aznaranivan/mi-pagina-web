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
import { EntrenamientoSaludComponent } from './components/entrenamiento-salud/entrenamiento-salud.component';
import { RegistroComponent } from './components/precios/registro/registro.component';
import { PagoComponent } from "./components/precios/pago/pago.component";
import { TarjetaComponent } from "./components/precios/tarjeta/tarjeta.component";
import { LoadingComponent } from './components/precios/loading/loading.component';
import { EjerciciosComponent } from './components/alta/ejercicios/ejercicios.component';
import { DominadasComponent } from "./components/alta/ejercicios/espalda/dominadas.component";
import { SaludComponent } from "./components/alta/salud/salud.component";





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
        { path: 'entrenamiento-salud', component: EntrenamientoSaludComponent },
        { path: 'registro', component: RegistroComponent },
        { path: 'pago', component: PagoComponent },
        { path: 'tarjeta', component: TarjetaComponent },
        { path: 'procesando', component: LoadingComponent },
        { path: 'acceso', component: InvitadoAdministradorComponent },
        { path: 'components/alta/ejercicios', component: EjerciciosComponent },
        { path: 'components/alta/ejercicios/espalda/dominadas', component: DominadasComponent },
        { path: 'components/alta/salud', component: SaludComponent },

        

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{}