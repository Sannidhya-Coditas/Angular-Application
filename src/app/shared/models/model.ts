export interface ColumnDefinitionV1<T> {
  displayName: string;
  fieldName: keyof T; // restricts to keys of T
  type?: 'string' | 'number' | 'date'; // optional, defaults to 'string'
}
