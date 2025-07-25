import { Direction } from '@shared/type';
export interface SplitProps {
  component?: string;
  direction?: Direction;
  size?: number;
  defaultSize?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export interface SplitEmits {
  (e: 'update:size', value: number): void;
  (e: 'moving-start'): void;
  (e: 'moving'): void;
  (e: 'moving-end'): void;
}

export interface SplitSlots {
  ['resize-trigger-icon'](): void;
  ['resize-trigger'](): void;
  first(): void;
  second(): void;
}
