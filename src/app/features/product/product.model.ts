import { ColumnDefinitionV1 } from '../../shared/models/model';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  supplier: string;
  sku: string;
  launchDate: string; // ISO string format
  rating: number; // 1-5 stars
}
