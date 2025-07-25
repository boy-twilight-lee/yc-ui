import { Direction, ObjectData } from '@shared/type';

export interface CheckboxProps {
  modelValue?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: CheckboxValue;
  indeterminate?: boolean;
}

export interface CheckboxEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean, ev: Event): void;
}

export interface CheckboxSlots {
  default(): void;
  checkbox(scope: { checked: boolean; disabled: boolean }): void;
}

export interface CheckboxGroupProps {
  modelValue?: CheckboxValue[];
  defaultValue?: CheckboxValue[];
  max?: number;
  options?: (CheckboxOption | CheckboxValue)[];
  direction?: Direction;
  disabled?: boolean;
}

export interface CheckboxGroupEmits {
  (e: 'update:modelValue', value: CheckboxValue[]): void;
  (e: 'change', value: CheckboxValue[]): void;
}

export interface CheckboxGroupSlots {
  default(): void;
  checkbox(scope: { checked: boolean; disabled: boolean }): void;
  label(scope: { data: ObjectData }): void;
}

export type CheckboxOption = (
  | CheckboxValue
  | {
      label?: string;
      value: CheckboxValue;
      disabled?: boolean;
      indeterminate?: boolean;
    }
)[];

export type CheckboxValue = string | number | boolean;
