//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//order delivery module
import { OrderDeliveryComponent } from './components/order-delivery.component';
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
import { OrderFacadeService } from './services/orderFacade.service';
import { OrderDeliveryHttpService } from './services/order-delivery-http.service';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [{ path: '',
 component: OrderDeliveryComponent,
 resolve:{
   cities:CitiesResolver
 }
 }];

@NgModule({
  declarations: [OrderDeliveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(orderDeliveryFeatureKey, reducer),
    EffectsModule.forFeature([OrderDeliveryEffects]),
    SharedModule
  ],
  providers: [OrderDeliveryHttpService, CitiesResolver, OrderFacadeService]
})
export class OrderDeliveryModule {}
