import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'error',
        loadChildren: () => import('./../../error/error.module').then(m => m.ErrorModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./../../auth/auth.module').then(m => m.AuthModule)
    },

    {
      path: 'welcome',
      component: LoginComponent
    }
];
