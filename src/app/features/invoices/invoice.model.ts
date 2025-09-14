import { ColumnDefinitionV1 } from "src/app/shared/models/model";

 export interface Invoice {
  id: number;
  invoiceNo: string;
  customerName: string;
  amount: number;
  invoiceDate: string; // ISO string or YYYY-MM-DD
  status: "Paid" | "Pending" | "Overdue" |undefined;
}
export interface InvoiceApiResponseContract{
    columns:ColumnDefinitionV1<Invoice>[],
data:Invoice[]
}