import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { City } from '../order-delivery.models';

export interface OrderForm {
  name: string;
  phoneNumber: string;
  pickupAddress: string;
  pickupCity: string;
  dropOffCity: string;
  receiverName: string;
  receiverPhoneNumbers: string;
  dropOffAddress: string;
}
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent implements OnInit {
  // see reade for null (angular 13 demands assignment)
  @Input() cities: City[] | null = null;
  @Input() price: number | null = null;
  @Output() locationChanged: EventEmitter<{ city: City; isPickup: boolean }> =
  new EventEmitter<{ city: City; isPickup: boolean }>();
  @Output() submitForm: EventEmitter<{ payload: OrderForm }> =
  new EventEmitter<{ payload: OrderForm }>();
  formGroup: any;
  private regExp: RegExp =
    /^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;
  constructor() {}
  get orderForm () { return this.formGroup.controls; }
  ngOnInit(): void {
    this.buildFormGroup();
  }
  buildFormGroup() {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regExp),
      ]),
      pickupAddress: new FormControl('', [Validators.required]),
      pickupCity: new FormControl('', [Validators.required]),
      dropOffCity: new FormControl('', [Validators.required]),
      receiverName: new FormControl('', [Validators.required]),
      receiverPhoneNumbers: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regExp),
      ]),
      dropOffAddress: new FormControl('', [Validators.required]),
    });
  }

  cityChanged(city: City, isPickup: boolean) {
    this.locationChanged.emit({ city, isPickup });
  }

  onSubmit(value: FormGroup) {
    const form = this.formGroup?.value;
    const dropOffCity = form?.dropOffCity.enName;
    const pickupCity = form?.pickupCity.enName;
    const payload = { ...form, ...{ pickupCity, dropOffCity } };
    this.submitForm.emit(payload);
  }
}
