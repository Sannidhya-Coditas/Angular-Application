export interface Order {
  id: number;
  customerName: string;
  productName: string;
  quantity: number;
  orderDate: string; // ISO string format
}
