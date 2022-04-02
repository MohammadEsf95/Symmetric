import {Routes} from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../../about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../../static/static.module').then(m => m.StaticModule)
  },
  {
    path: 'strength-standards',
    loadChildren: () => import('../../strength-standards/strength-standards.module').then(m => m.StrengthStandardsModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('../../calculators/calculators.module').then(m => m.CalculatorsModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../../settings/setting.module').then(m => m.SettingModule)
  },
  {
    path: 'lifter/:username',
    loadChildren: () => import('../../public-page/public-page.module').then(m => m.PublicPageModule)
  }
];
