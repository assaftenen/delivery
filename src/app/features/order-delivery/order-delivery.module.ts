//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//order delivery module

import { RouterModule, Routes } from '@angular/router';

//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  reducer,
  OrderDeliveryEffects,
  orderDeliveryFeatureKey,
} from './store';
import { CitiesResolver } from './order-delivery.resolver';
import { OrderFacade } from './services/orderFacade.service';
import { OrderDeliveryHttpService } from './services/order-delivery-http.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderDeliveryComponent } from './components/order-form/order-delivery.component';

const routes: Routes = [
  {
    path: '',
    component: OrderDeliveryComponent,
    resolve: {
      cities: CitiesResolver,
    },
  },
];

@NgModule({
  declarations: [OrderDeliveryComponent, OrderFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(orderDeliveryFeatureKey, reducer),
    EffectsModule.forFeature([OrderDeliveryEffects]),
    SharedModule,
  ],
  providers: [OrderDeliveryHttpService, CitiesResolver, OrderFacade],
})
export class OrderDeliveryModule {}
