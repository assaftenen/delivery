import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orderDelivery',
    pathMatch: 'full',

  },
  { path: 'orderDelivery',
  canActivate: [AuthGuardService],
   loadChildren: () => import('./features/order-delivery/order-delivery.module').then(m => m.OrderDeliveryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
