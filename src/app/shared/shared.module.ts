import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [],
    imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ MaterialModule,FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
