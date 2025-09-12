import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaceValidator(
  control: AbstractControl,
): ValidationErrors | null {
  if ((control.value as string).includes(' ')) {
    return { noSpace: true }; // validation fails
  }
  return null; // valid
}
export function customEmailValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const value: string = control.value || '';

  // If empty, skip (let required validator handle it)
  if (!value) return null;

  const lastDotIndex = value.lastIndexOf('.');

  // No dot or not enough characters after dot
  if (lastDotIndex === -1 || value.length - lastDotIndex - 1 !== 3) {
    return { customEmail: true }; // validation fails
  }

  return null; // valid
}
