import {Routes} from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'static',
    loadChildren: () => import('../../static/static.module').then(m => m.StaticModule)
  }
];
