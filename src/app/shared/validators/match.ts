import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function match(field1: string, field2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const field1Value = control.get(field1)!.value;
        const field2Value = control.get(field2)!.value;
        return field1Value === field2Value ? null : { match: true };
    }
  }