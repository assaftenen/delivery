//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

//order delivery module
import { CitiesResolver } from './order-delivery.resolver';
import { OrderFacade } from './services/orderFacade.service';
import { OrderFormComponent } from './order-form/order-form.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderDeliveryHttpService } from './services/order-delivery-http.service';
import { OrderDeliveryComponent } from './components/order-form/order-delivery.component';


//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  reducer,
  OrderDeliveryEffects,
  orderDeliveryFeatureKey,
} from './store';

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
