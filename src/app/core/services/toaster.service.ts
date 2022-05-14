import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

constructor(private snackBarService: MatSnackBar) { }
  openSnackBar(msg:string) {
    this.snackBarService.open(msg,undefined, {duration:1500});
  }
}
