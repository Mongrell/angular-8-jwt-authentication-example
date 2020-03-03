import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { RegisterComponent } from './register/register.component';
import { UserAdvertsComponent } from './userAdverts/user-adverts.component';
import { EditAdvertComponent } from './editAdverts/edit-advert.component';
import { AdvertListComponent } from './advertsList/adverts-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'adverts', component: UserAdvertsComponent, canActivate: [AuthGuard] },
    { path: 'adverts/:id/edit', component: EditAdvertComponent, canActivate: [AuthGuard] },
    { path: 'sales', component: AdvertListComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);