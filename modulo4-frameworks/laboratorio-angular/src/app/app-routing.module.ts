import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [NoAuthGuard], title: 'Home' },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard], title: 'Login' },
  { path: 'about', component: AboutComponent, canActivate: [NoAuthGuard], title: 'About' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], title: 'Dashboard' },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard], title: 'Gallery' },
  { path: 'crud', component: CrudComponent, canActivate: [AuthGuard], title: 'Crud' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], title: 'Profile' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
