import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { City } from '../order-delivery.models';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Input() cities:City[] | null = null;
  formGroup: any;
  constructor() { }

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
