import {Routes} from '@angular/router';


export const PUBLIC_ROUTES: Routes = [

  {
    path: 'static',
    loadChildren: () => import('../../static/static.module').then(m => m.StaticModule)
  }
];
