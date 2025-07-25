<template>
  <a
    v-if="href"
    :href="href"
    :class="className"
    v-bind="$attrs"
    @mousedown="handleEvent('mousedown', $event)"
    @mouseup="handleEvent('mouseup', $event)"
    @click="handleEvent('click', $event)"
    @dblclick="handleEvent('dblclick', $event)"
    @contextmenu="handleEvent('contextmenu', $event)"
  >
    <span v-if="$slots.icon || loading" class="yc-button-icon">
      <yc-spin v-if="loading" is-size-inherit />
      <slot v-else name="icon" />
    </span>
    <slot />
  </a>
  <button
    v-else
    :type="htmlType"
    :disabled="disabled"
    :class="className"
    v-bind="$attrs"
    @mousedown="handleEvent('mousedown', $event)"
    @mouseup="handleEvent('mouseup', $event)"
    @click="handleEvent('click', $event)"
    @dblclick="handleEvent('dblclick', $event)"
    @contextmenu="handleEvent('contextmenu', $event)"
  >
    <span v-if="$slots.icon || loading" class="yc-button-icon">
      <yc-spin v-if="loading" is-size-inherit />
      <slot v-else name="icon" />
    </span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { toRefs, computed, useSlots } from 'vue';
import { ButtonProps, ButtonEmits, ButtonSlots } from './type';
import useContext from './hooks/useContext';
import YcSpin from '@/components/Spin';
defineOptions({
  name: 'Button',
});
defineSlots<ButtonSlots>();
const props = withDefaults(defineProps<ButtonProps>(), {
  type: undefined,
  status: undefined,
  size: undefined,
  shape: undefined,
  disabled: undefined,
  loading: false,
  long: false,
  htmlType: 'button',
  href: '',
});
const emits = defineEmits<ButtonEmits>();
const {
  loading,
  disabled: _disabled,
  type: _type,
  status: _status,
  shape: _shape,
  long,
} = toRefs(props);
// 呼求注入
const { size, disabled, type, status, shape } = useContext().inject(props);
// slots
const slots = useSlots();
// class-name
const className = computed(() => {
  return [
    'yc-button',
    `yc-button-size-${size.value}`,
    `yc-button-${type.value}`,
    `yc-button-status-${status.value}`,
    `yc-button-shape-${shape.value}`,
    {
      'yc-button-long': long.value,
      'yc-button-loading': loading.value,
      'yc-button-disabled': disabled.value,
      'yc-button-only-icon': !slots.default,
    },
  ];
});
// 拦截事件
const handleEvent = (type: string, e: MouseEvent) => {
  if (disabled.value || loading.value) return;
  emits(type as keyof ButtonEmits, e);
};
</script>

<style lang="less" scoped>
@import './style/button.less';
</style>
