<template>
  <yc-scrollbar
    :scrollbar="scrollbar"
    class="yc-select-dropdown-list-wrapper"
    @scroll="(_, _1, e) => emits('dropdown-scroll', e)"
  >
    <div class="yc-select-dropdown-list">
      <!-- default -->
      <component :is="slots.default" />
      <!-- option -->
      <template v-for="option in renderOptions" :key="option.id">
        <template v-if="option.isGroup">
          <yc-optgroup :label="option.label">
            <yc-option
              v-for="v in option.options"
              :key="v[fieldKey.value]"
              :value="v[fieldKey.value]"
              :disabled="v[fieldKey.disabled]"
              :tag-props="v[fieldKey.tagProps]"
              :is-fallback-option="v[fieldKey.isFallbackOption]"
            >
              <component :is="renderLabel(v)" />
            </yc-option>
          </yc-optgroup>
        </template>
        <template v-else>
          <yc-option
            :value="option[fieldKey.value]"
            :disabled="option[fieldKey.disabled]"
            :tag-props="option[fieldKey.tagProps]"
            :is-fallback-option="option[fieldKey.isFallbackOption]"
          >
            <component :is="renderLabel(option)" />
          </yc-option>
        </template>
      </template>
    </div>
  </yc-scrollbar>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { ObjectData } from '@shared/type';
import { getSlotFunction } from '@shared/utils';
import useContext from './hooks/useContext';
import YcOption from './Option.vue';
import YcOptgroup from './Optgroup.vue';
import {
  default as YcScrollbar,
  ScrollbarInstance,
} from '@/components/Scrollbar';
defineProps<{
  scrollbar: boolean;
}>();
// 接收注入
const { fieldKey, renderOptions, slots, emits } = useContext().inject();
// scrollbar
const scrollbarRef = ref<ScrollbarInstance>();
// 渲染label
const renderLabel = (option: ObjectData) => {
  if (slots.option) {
    return () =>
      slots.option?.({
        data: option,
      }) || [];
  }
  const { render, label } = fieldKey.value;
  return getSlotFunction(option[render] ? option[render] : option[label]);
};
defineExpose({
  getScrollRef() {
    return scrollbarRef.value?.getScrollRef();
  },
});
</script>

<style lang="less" scoped>
@import './style/select.less';
</style>
