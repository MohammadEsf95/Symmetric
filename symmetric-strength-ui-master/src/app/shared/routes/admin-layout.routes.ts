import {Routes} from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../../admin-page/admin-page.module').then(m => m.AdminPageModule)
  }
]
