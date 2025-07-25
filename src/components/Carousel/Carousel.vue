<template>
  <div
    :class="[
      'yc-carousel',
      `yc-carousel-animation-${animationName}`,
      {
        'yc-carousel-indicator-outer': indicatorPosition == 'outer',
      },
    ]"
  >
    <div
      :class="['yc-carousel-slide', `yc-carousel-direction-${direction}`]"
      @mouseenter="autoPlay?.hoverToPause && stopAutoPlay()"
      @mouseleave="autoPlay?.hoverToPause && setAutoPlay()"
    >
      <component v-for="(node, i) in carouselItems" :is="node" :index="i + 1" />
    </div>
    <div v-if="indicatorType != 'never'" class="yc-carousel-indicator-wrapper">
      <carousel-indicator
        :indicator-class="indicatorClass"
        :trigger="trigger"
        :indicator-position="indicatorPosition"
        :indicator-type="indicatorType"
        @change="handleChange"
      />
    </div>
    <div v-if="showArrow != 'never'" class="yc-carousel-arrow-wrapper">
      <carousel-arrow type="pre" @change="handleChange" />
      <carousel-arrow type="next" @change="handleChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch, onBeforeUnmount } from 'vue';
import { CarouselProps, CarouselEmits, CarouselSlots } from './type';
import useContext from './hooks/useContext';
import CarouselArrow from './CarouselArrow.vue';
import CarouselIndicator from './CarouselIndicator.vue';
defineOptions({
  name: 'Carousel',
});
defineSlots<CarouselSlots>();
const props = withDefaults(defineProps<CarouselProps>(), {
  current: undefined,
  defaultCurrent: 1,
  autoPlay: false,
  moveSpeed: 500,
  animationName: 'slide',
  trigger: 'click',
  direction: 'horizontal',
  showArrow: 'always',
  arrowClass: '',
  indicatorType: 'dot',
  indicatorPosition: 'bottom',
  indicatorClass: '',
  transitionTimingFunction: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
});
const emits = defineEmits<CarouselEmits>();
// 注入
const { slideTo, computedCurrent, autoPlay, carouselItems } =
  useContext().provide(props, emits);
// 自动播放的timer
let autoPlayTimer: any = null;
// 设置自动播放
const setAutoPlay = () => {
  if (!autoPlay.value) return;
  autoPlayTimer = setInterval(() => {
    slideTo(computedCurrent.value + 1);
  }, autoPlay.value?.interval ?? 3000);
};
// 停止自动播放
const stopAutoPlay = () => {
  clearInterval(autoPlayTimer);
  autoPlayTimer = null;
};
// 处理click切换
const handleChange = async (index: number) => {
  stopAutoPlay();
  await slideTo(index);
  setAutoPlay();
};
watch(
  () => autoPlay.value,
  () => {
    if (!autoPlay.value) {
      return stopAutoPlay();
    }
    setAutoPlay();
  },
  {
    immediate: true,
  }
);
onBeforeUnmount(() => {
  stopAutoPlay();
});
</script>

<style lang="less" scoped>
@import './style/carousel.less';
</style>
