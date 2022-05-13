import { Component, OnInit } from '@angular/core';
import { OrderFacade } from '../../services/orderFacade.service';


@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss'],
})
export class OrderDeliveryComponent implements OnInit {
  formGroup: any;
  constructor( public orderFacade: OrderFacade) {

  }
  ngOnInit(): void {

  }

}
