import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/main',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'reset',
    component: PasswordResetComponent
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  { path: '**', redirectTo: 'dashboard/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
