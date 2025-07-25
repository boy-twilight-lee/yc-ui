import { ObjectData, PopupContainer, Theme } from '@shared/type';
import { TriggerProps, TriggerType } from '@/components/Trigger';
import { ButtonProps, ButtonType } from '@/components/Button';
import { Size } from '@shared/type';
export interface DropdownProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  trigger?: TriggerType;
  position?: DropdownPosition;
  popupContainer?: PopupContainer;
  hideOnSelect?: boolean;
  alignPoint?: boolean;
  // triggerProps
  triggerProps?: TriggerProps;
  popupMaxHeight?: number | boolean;
  theme?: Theme;
}

export interface DropdownEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
  (e: 'select', value: DoptionValue, ev: MouseEvent): void;
}

export interface DropdownSlots {
  default(): void;
  content(): void;
  footer(): void;
}

export interface DropdownExpose {
  show(): void;
  hide(): void;
}

export interface DoptionProps {
  value?: DoptionValue;
  disabled?: boolean;
  // 是否激活
  isSubmenu?: boolean;
  isActive?: boolean;
}

export interface DoptionSlots {
  default(): void;
  icon(): void;
  suffix(): void;
}

export interface DsubmenuProps {
  disabled?: boolean;
  trigger?: DsubmenuTrigger;
  position?: DsubmenuPosition;
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  // triggerProps
  triggerProps?: TriggerProps;
  popupMaxHeight?: number;
}

export interface DsubmenuEmits {
  (e: 'update:popupVisible', value: boolean): void;
  (e: 'popup-visible-change', value: boolean): void;
}

export interface DsubmenuSlots {
  content(): void;
  default(): void;
  footer(): void;
}

export interface DgroupProps {
  title?: string;
}

export interface DgroupSlots {
  title(): void;
  default(): void;
}

export interface DropdownButtonProps {
  popupVisible?: boolean;
  defaultPopupVisible?: boolean;
  trigger?: TriggerType;
  position?: DropdownPosition;
  popupContainer?: PopupContainer;
  disabled?: boolean;
  type?: ButtonType;
  size?: Size;
  buttonProps?: ButtonProps;
  hideOnSelect?: boolean;
}

export interface DropdownButtonSlots {
  content(): void;
  default(): void;
  icon(): void;
}

export type DoptionValue = string | number | boolean | ObjectData;
export type DropdownPosition = 'top' | 'tr' | 'tl' | 'bottom' | 'br' | 'bl';
export type DsubmenuTrigger = 'hover' | 'click';
export type DsubmenuPosition = 'rt' | 'lt';
