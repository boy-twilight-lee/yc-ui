<template>
  <div class="yc-menu-group">
    <div class="yc-menu-group-title text-ellipsis">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      class="yc-menu-group-content"
      :style="{
        paddingLeft: valueToPx(levelIndent),
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuItemGroupProps, MenuItemGroupSlots } from './type';
import { valueToPx } from '@shared/utils';
import useContext from './hooks/useContext';
defineOptions({
  name: 'MenuItemGroup',
});
defineSlots<MenuItemGroupSlots>();
withDefaults(defineProps<MenuItemGroupProps>(), {
  title: '',
});
// 接收menu注入
const { levelIndent } = useContext().inject();
</script>

<style lang="less" scoped>
@import './style/menu-item-group.less';
</style>
