import { Component, Input, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-select-checkbox-dropdown',
  templateUrl: './mult-select-checkbox.component.html',
  styleUrls: ['./mult-select-checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultSelectCheckboxComponent,
      multi: true,
    },
  ],
})
export class MultSelectCheckboxComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  @Input() placeholder = 'Select options';
  selectedValues: string[] = [];
  isOpen = false;
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: string[]): void {
    this.selectedValues = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleDropdown() {
    if (!this.disabled) this.isOpen = !this.isOpen;
  }

  selectOption(option: string, event: Event) {
    event.stopPropagation(); // prevent dropdown closing when clicking checkbox

    const index = this.selectedValues.indexOf(option);
    if (index === -1) {
      this.selectedValues.push(option);
    } else {
      this.selectedValues.splice(index, 1);
    }
    this.onChange(this.selectedValues);
  }

  isSelected(option: string): boolean {
    return this.selectedValues.includes(option);
  }

  // Close dropdown if clicked outside
  @HostListener('document:click', ['$event.target'])
  handleClick(target: any) {
    if (!target.closest('.dropdown-container')) {
      this.isOpen = false;
    }
  }
}
