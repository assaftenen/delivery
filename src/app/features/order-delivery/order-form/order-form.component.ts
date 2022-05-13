import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { City } from '../order-delivery.models';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  @Input() cities: City[] | null = null;
  @Input() price: number | null = null;
  @Output() locationChanged: EventEmitter<{ city: City; isPickup: boolean }> =
    new EventEmitter<{ city: City; isPickup: boolean }>();
  formGroup: any;
  constructor() {}

  ngOnInit(): void {
    this.buildFormGroup();
  }
  buildFormGroup() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/
        ),
      ]),
      phoneNumber: new FormControl('', [Validators.required]),
      pickupAddress: new FormControl('', [Validators.required]),
      pickupCity: new FormControl('', [Validators.required]),
      dropOffCity: new FormControl('', [Validators.required]),
      receiverName: new FormControl('', [Validators.required]),
      receiverPhoneNumbers: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/
        ),
      ]),
      dropOffAddress: new FormControl('', [Validators.required]),
    });
  }

  cityChanged(city: City, isPickup: boolean) {
    this.locationChanged.emit({ city, isPickup });
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
