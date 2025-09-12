import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell-editor',
  templateUrl: './cell-editor.component.html',
  styleUrls: ['./cell-editor.component.css'],
})
export class CellEditorComponent {
  @Input() type: 'string' | 'number' | 'date' = 'string';
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
}
