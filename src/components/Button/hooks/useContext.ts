import {
  ref,
  toRefs,
  Ref,
  computed,
  provide as _provide,
  inject as _inject,
} from 'vue';
import {
  ButtonType,
  ButtonShape,
  ButtonStatus,
  ButtonProps as _ButtonProps,
  ButtonGroupProps as _ButtonGroupProps,
} from '../type';
import { Size, RequiredDeep, Props } from '@shared/type';
import { getGlobalConfig, isUndefined } from '@shared/utils';

const BUTTON_GROUP_CONTEXT_KEY = 'button-group-context';
type ButtonContext = {
  type: Ref<ButtonType>;
  status: Ref<ButtonStatus>;
  size?: Ref<Size>;
  shape: Ref<ButtonShape>;
  disabled: Ref<boolean>;
};
type ButtonProps = RequiredDeep<_ButtonProps>;
type ButtonGroupProps = RequiredDeep<_ButtonGroupProps>;
type FieldValue =
  | ButtonShape
  | ButtonStatus
  | ButtonType
  | boolean
  | Size
  | undefined;

export default () => {
  const provide = (props: Props) => {
    const { type, status, shape, disabled } = toRefs(props as ButtonGroupProps);
    const { size } = getGlobalConfig(props);
    _provide<ButtonContext>(BUTTON_GROUP_CONTEXT_KEY, {
      type,
      status,
      size,
      shape,
      disabled,
    });
  };
  const inject = (props: Props) => {
    const { size: globalSize } = getGlobalConfig(props);
    const { type, status, shape, size, disabled } = toRefs(
      props as ButtonProps
    );
    const {
      type: _type,
      status: _status,
      shape: _shape,
      disabled: _disabled,
      size: _size,
    } = _inject<ButtonContext>(BUTTON_GROUP_CONTEXT_KEY, {
      type: ref('secondary'),
      status: ref('normal'),
      shape: ref('square'),
      disabled: ref(false),
    });
    // 获取field
    const getField = (
      value: FieldValue,
      injectValue: FieldValue,
      globalValue?: FieldValue
    ) => {
      if (!isUndefined(value)) {
        return value;
      }
      if (isUndefined(globalValue)) {
        return injectValue;
      }
      return !isUndefined(injectValue) ? injectValue : globalValue;
    };
    return {
      disabled: computed(() => disabled.value ?? _disabled.value),
      type: computed(() => type.value ?? _type.value),
      status: computed(() => status.value ?? _status.value),
      shape: computed(() => shape.value ?? _shape.value),
      size: computed(() =>
        getField(size.value, _size?.value, globalSize.value)
      ),
    };
  };
  return {
    provide,
    inject,
  };
};
