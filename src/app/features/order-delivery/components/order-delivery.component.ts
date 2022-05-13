import { Component, OnInit } from '@angular/core';
import { OrderFacade } from '../services/orderFacade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss'],
})
export class OrderDeliveryComponent implements OnInit {
  formGroup: any;
  constructor(private facade: OrderFacade) {}
  ngOnInit(): void {

  }

}
