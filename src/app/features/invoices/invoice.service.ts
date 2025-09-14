import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InvoiceApiResponseContract } from "./invoice.model";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class InvoiceService{
  constructor(private http:HttpClient){

  }
  getInvoiceData():Observable<InvoiceApiResponseContract>{
   return this.http.get<InvoiceApiResponseContract>('api/invoices')
  }
}