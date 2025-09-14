import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice, InvoiceApiResponseContract } from '../invoice.model';
import { map } from 'rxjs';
import { ColumnDefinition } from 'src/app/constants/types';
import { ColumnDefinitionV1 } from 'src/app/shared/models/model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  constructor(private invoiceService:InvoiceService){

  }
  columns:ColumnDefinitionV1<Invoice>[]=[]
  invoicedata:Invoice[]=[]
  ngOnInit(): void {
    this.invoiceService.getInvoiceData().subscribe((data:InvoiceApiResponseContract)=>console.log(data.data),(val)=>console.log(val),()=>console.log('complete'));
    this.invoiceService.getInvoiceData().subscribe({next:((apiresponse)=>console.log(apiresponse. columns)),complete:()=>console.log('complete1')})
    this.invoiceService.getInvoiceData().pipe(map((val:InvoiceApiResponseContract)=>val.columns)).subscribe({next:((data)=>console.log(data))})
    this.invoiceService.getInvoiceData().subscribe(
      {
        next:((response:InvoiceApiResponseContract)=>{
          this.columns=response.columns
          this.invoicedata=response.data
        })
      }
    )

  }
}
