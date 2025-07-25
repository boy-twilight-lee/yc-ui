import { Size, ObjectData } from '@shared/type';
export interface InputNumberProps {
  modelValue?: InputNumberValue;
  defaultValue?: InputNumberValue;
  mode?: InputNumberMode;
  precision?: number;
  step?: number;
  disabled?: boolean;
  error?: boolean;
  max?: number;
  min?: number;
  placeholder?: string;
  hideButton?: boolean;
  size?: Size;
  allowClear?: boolean;
  modelEvent?: ModelEvent;
  formatter?: InputNumberFormatter;
  parser?: InputNumberParser;
  readonly?: boolean;
  inputAttrs?: ObjectData;
}

export interface InputNumberEmits {
  (e: 'update:modelValue', value: InputNumberValue): void;
  (e: 'input', value: InputNumberValue, ev: Event): void;
  (e: 'change', value: InputNumberValue, ev: Event): void;
  (e: 'focus', ev: FocusEvent): void;
  (e: 'blur', ev: FocusEvent): void;
  (e: 'clear', ev: MouseEvent): void;
  (e: 'keydown', ev: KeyboardEvent): void;
  (e: 'pressEnter', ev: KeyboardEvent): void;
}

export interface InputNumberSlots {
  plus(): void;
  minus(): void;
  suffix(): void;
  prefix(): void;
  suffix(): void;
  prepend(): void;
  append(): void;
  label(): void;
}

export interface InputNumberExpose {
  focus(): void;
  blur(): void;
}

export type InputNumberValue = number | string;
export type InputNumberMode = 'embed' | 'button';
export type ModelEvent = 'change' | 'input';
export type InputNumberFormatter = (value: string) => string;
export type InputNumberParser = (value: string) => string;
