import { Component, EventEmitter, OnInit } from '@angular/core';
import { City } from '../../order-delivery.models';
import { OrderFacade } from '../../services/orderFacade.service';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss'],
})
export class OrderDeliveryComponent implements OnInit {
  formGroup: any;
  constructor(public orderFacade: OrderFacade) {}
  ngOnInit(): void {}
  onLocationChanged(value: { city: City; isPickup: boolean }): void {
    this.orderFacade.updateLocationPrice(value);
  }
}
