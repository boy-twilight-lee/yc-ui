import { ref, toRefs, provide as _provide, inject as _inject, Ref } from 'vue';
import { DoptionValue, DropdownEmits } from '../type';
import { Props, Theme } from '@shared/type';
import { useControlValue } from '@shared/utils';

const DROPDOWN_CONTEXT_KEY = 'dropdown-context';
type DropdownContext = {
  theme: Ref<Theme>;
  select: (value: DoptionValue, ev: MouseEvent) => void;
};

export default () => {
  const provide = (props: Props, emits: DropdownEmits) => {
    const {
      popupVisible,
      defaultPopupVisible,
      hideOnSelect,
      theme,
      position: _position,
    } = toRefs(props);
    // 受控的visible
    const computedVisible = useControlValue<boolean>(
      popupVisible,
      defaultPopupVisible.value,
      (val) => {
        emits('update:popupVisible', val);
        emits('popup-visible-change', val);
      }
    );
    // dropdown提供的值
    _provide<DropdownContext>(DROPDOWN_CONTEXT_KEY, {
      theme,
      select: (value: DoptionValue, ev: MouseEvent) => {
        emits('select', value, ev);
        if (!hideOnSelect.value) return;
        computedVisible.value = false;
      },
    });
    return {
      computedVisible,
    };
  };
  const inject = () => {
    // 接收的值
    return _inject<DropdownContext>(DROPDOWN_CONTEXT_KEY, {
      theme: ref('light'),
      select: () => {},
    });
  };
  return {
    provide,
    inject,
  };
};
