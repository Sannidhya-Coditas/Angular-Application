import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cell-editor',
  templateUrl: './cell-editor.component.html',
  styleUrls: ['./cell-editor.component.css'],
})
export class CellEditorComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes['value'].currentValue,changes['value'].previousValue)
  }
  @Input() type: 'string' | 'number' | 'date' = 'string';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
  
}
