import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDeliveryComponent } from './order-delivery.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: OrderDeliveryComponent }];

@NgModule({
  declarations: [
    OrderDeliveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class OrderDeliveryModule { }
