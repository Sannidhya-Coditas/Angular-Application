import { Component } from '@angular/core';
import { ColumnDefinitionV1 } from 'src/app/shared/models/model';
import { Order } from '../order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  orderColumns: ColumnDefinitionV1<Order>[] = [
    { displayName: 'Order ID', fieldName: 'id', type: 'number' },
    { displayName: 'Customer Name', fieldName: 'customerName', type: 'string' },
    { displayName: 'Product Name', fieldName: 'productName', type: 'string' },
    { displayName: 'Quantity', fieldName: 'quantity', type: 'number' },
    { displayName: 'Order Date', fieldName: 'orderDate', type: 'date' },
  ];
  orders: Order[] = [
    {
      id: 101,
      customerName: 'Alice Johnson',
      productName: 'Laptop Pro 15',
      quantity: 1,
      orderDate: '2023-08-01',
    },
    {
      id: 102,
      customerName: 'Bob Smith',
      productName: 'Wireless Mouse',
      quantity: 2,
      orderDate: '2023-08-03',
    },
    {
      id: 103,
      customerName: 'Charlie Brown',
      productName: 'Office Chair',
      quantity: 1,
      orderDate: '2023-08-04',
    },
    {
      id: 104,
      customerName: 'Diana Prince',
      productName: 'Gaming Keyboard',
      quantity: 1,
      orderDate: '2023-08-05',
    },
    {
      id: 105,
      customerName: 'Evan Lee',
      productName: 'Smartphone X',
      quantity: 1,
      orderDate: '2023-08-06',
    },
    {
      id: 106,
      customerName: 'Fiona Green',
      productName: 'Desk Lamp',
      quantity: 3,
      orderDate: '2023-08-07',
    },
    {
      id: 107,
      customerName: 'George Miller',
      productName: 'Bluetooth Headphones',
      quantity: 2,
      orderDate: '2023-08-08',
    },
    {
      id: 108,
      customerName: 'Hannah Scott',
      productName: 'Water Bottle',
      quantity: 4,
      orderDate: '2023-08-09',
    },
    {
      id: 109,
      customerName: 'Ian Clark',
      productName: 'Monitor 27"',
      quantity: 1,
      orderDate: '2023-08-10',
    },
    {
      id: 110,
      customerName: 'Jane Doe',
      productName: 'Laptop Pro 15',
      quantity: 1,
      orderDate: '2023-08-11',
    },
  ];
}
