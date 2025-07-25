<template>
  <div
    :class="[
      'yc-space',
      `yc-space-align-${align}`,
      `yc-space-direction-${direction}`,
      {
        'yc-space-wrap': wrap,
        'yc-space-fill': fill,
      },
    ]"
    :style="{
      gap,
    }"
  >
    <!-- 无split直接渲染 -->
    <slot v-if="!$slots.split" />
    <!--有split分开渲染 -->
    <template v-for="(node, i) in nodes" :key="i">
      <div class="yc-space-item">
        <component :is="getSlotFunction(node as any as string)" />
      </div>
      <div v-if="i < nodes.length - 1" class="yc-space-split">
        <slot name="split" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, computed, useSlots, VNode, Fragment, Comment } from 'vue';
import { SpaceProps, SpaceSlots } from './type';
import {
  isNumber,
  valueToPx,
  isUndefined,
  getSlotFunction,
} from '@shared/utils';
defineOptions({
  name: 'Space',
});
defineSlots<SpaceSlots>();
const props = withDefaults(defineProps<SpaceProps>(), {
  direction: 'horizontal',
  align: undefined,
  size: 'small',
  wrap: false,
  fill: false,
});
const { size, direction, align: _align } = toRefs(props);
// slots
const slots = useSlots();
// 计算gap
const gap = computed(() => {
  const map = {
    mini: 4,
    small: 8,
    medium: 16,
    large: 24,
  };
  return valueToPx(isNumber(size.value) ? size.value : map[size.value]);
});
// align
const align = computed(() => {
  if (!isUndefined(_align.value)) {
    return _align.value;
  }
  return direction.value == 'horizontal' ? 'center' : 'start';
});
// node
const nodes = computed(() => {
  if (!slots.split) return [];
  const result: VNode[] = [];
  (slots.default?.() || []).forEach((node) => {
    if (node.type === Fragment) {
      result.push(...(node.children as VNode[]));
    } else if (node.type !== Comment) {
      result.push(node);
    }
  });
  return result;
});
</script>

<style lang="less" scoped>
@import './style/space.less';
</style>
