import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ANGULAR Material Module Imports
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports: [
    // ANGULAR Material Module Exports
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
