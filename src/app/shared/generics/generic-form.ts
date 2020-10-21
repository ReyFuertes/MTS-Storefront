import { Input, Directive} from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ISimpleItem } from 'src/app/models/generic.model';
import { FmtLabel } from '../utils/format-value';
import { GenericDestroyComponent } from './generic-destroy';
@Directive()
export class GenericFormComponent extends GenericDestroyComponent {
  @Input() public form: FormGroup;
  @Input() public controlName: any;
  @Input() public options: ISimpleItem[];
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public optional: boolean = false;
  @Input() public disabled: boolean = false;

  public FmtLabel = FmtLabel;
  constructor() {
    super();
  }

  public get hasError(): boolean {
    return this.form
      && this.form.get(this.controlName)
      && this.form.get(this.controlName).errors
      && this.form.get(this.controlName).touched;
  }

  public get isInputRequired() {
    const form_field = this.form.get(this.controlName);
    if (!form_field.validator) {
      return false;
    }
    const validator = form_field.validator({} as AbstractControl);
    return (validator && validator.required);
  }

  public get isRequired(): boolean {
    return this.form
      && this.form.get(this.controlName)
      && this.form.get(this.controlName).errors
      && this.form.get(this.controlName).errors.required;
  }
}
