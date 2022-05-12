import { Component, OnInit } from '@angular/core';
import { OrderFacadeService } from '../services/orderFacade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-delivery',
  templateUrl: './order-delivery.component.html',
  styleUrls: ['./order-delivery.component.scss'],
})
export class OrderDeliveryComponent implements OnInit {
  formGroup: any;
  constructor(private facade: OrderFacadeService) {}
  ngOnInit(): void {
    this.buildFormGroup();
  }
  buildFormGroup() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      receiverAddress: new FormControl('', [Validators.required]),
      receiverNames: new FormControl('', [Validators.required]),
      receiverPhoneNumbers: new FormControl('', [Validators.required, Validators.pattern(/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)]),
      dropAddress: new FormControl('',[Validators.required]),
    });
  }

  onSubmit(value:any){
    console.log(value)

  }
}
