import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private productService:ProductService) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.closeAll()
  }

}
