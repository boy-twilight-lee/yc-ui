<template>
  <div class="datyc-show">
    <!-- avatar -->
    <yc-space size="large">
      <yc-avatar>A</yc-avatar>
      <yc-avatar :style="{ backgroundColor: '#3370ff' }">
        <IconUser />
      </yc-avatar>
      <yc-avatar :style="{ backgroundColor: '#14a9f8' }">Arco</yc-avatar>
      <yc-avatar :style="{ backgroundColor: '#00d0b6' }">Design</yc-avatar>
      <yc-avatar>
        <img
          alt="avatar"
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
        />
      </yc-avatar>
    </yc-space>
    <!-- badge -->
    <yc-space :size="40">
      <yc-badge :count="9">
        <yc-avatar shape="square" />
      </yc-badge>
      <yc-badge :count="9" dot :dotStyle="{ width: '10px', height: '10px' }">
        <yc-avatar shape="square" />
      </yc-badge>
      <yc-badge :dotStyle="{ height: '16px', width: '16px', fontSize: '14px' }">
        <template #content>
          <IconClockCircle
            :style="{ verticalAlign: 'middle', color: 'var(--color-text-2)' }"
          />
        </template>
        <yc-avatar shape="square" />
      </yc-badge>
    </yc-space>
    <!-- Calendar -->
    <yc-calendar />
    <!-- card -->
    <yc-card :style="{ width: '360px' }">
      <template #actions>
        <span class="icon-hover"> <IconThumbUp /> </span>
        <span class="icon-hover"> <IconShareInternal /> </span>
        <span class="icon-hover"> <IconMore /> </span>
      </template>
      <template #cover>
        <div
          :style="{
            height: '204px',
            overflow: 'hidden',
          }"
        >
          <img
            :style="{ width: '100%', transform: 'translateY(-20px)' }"
            alt="dessert"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      </template>
      <yc-card-meta title="Card Title" description="This is the description">
        <template #avatar>
          <div
            :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
          >
            <yc-avatar :size="24" :style="{ marginRight: '8px' }">
              A
            </yc-avatar>
            <yc-typography-text>Username</yc-typography-text>
          </div>
        </template>
      </yc-card-meta>
    </yc-card>
    <!-- carousel -->
    <yc-space direction="vertical" size="large">
      <yc-radio-group v-model="indicatorType" type="button">
        <yc-radio value="dot">dot</yc-radio>
        <yc-radio value="line">line</yc-radio>
        <yc-radio value="slider">slider</yc-radio>
      </yc-radio-group>
      <yc-radio-group v-model="indicatorPosition" type="button">
        <yc-radio value="left">left</yc-radio>
        <yc-radio value="right">right</yc-radio>
        <yc-radio value="top">top</yc-radio>
        <yc-radio value="bottom">bottom</yc-radio>
        <yc-radio value="outer">outer</yc-radio>
      </yc-radio-group>
      <yc-carousel
        :indicator-type="indicatorType"
        :indicator-position="indicatorPosition"
        :style="{
          width: '600px',
          height: '240px',
        }"
      >
        <yc-carousel-item v-for="image in images" :key="image">
          <img
            :src="image"
            :style="{
              width: '100%',
            }"
          />
        </yc-carousel-item>
      </yc-carousel>
    </yc-space>
    <!-- collapse -->
    <yc-collapse style="width: fit-content; height: fit-content">
      <yc-collapse-item header="Beijing Toutiao Technology Co., Ltd." path="1">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
      <yc-collapse-item
        header="Beijing Toutiao Technology Co., Ltd."
        :path="2"
        disabled
      >
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
      <yc-collapse-item header="Beijing Toutiao Technology Co., Ltd." path="3">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </yc-collapse-item>
    </yc-collapse>
    <!-- comment -->
    <yc-comment
      author="Socrates"
      avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      content="Comment body content."
      datetime="1 hour"
    >
      <template #actions>
        <span class="action"> <IconMessage /> Reply </span>
      </template>
      <yc-comment
        author="Balzac"
        avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/9eeb1800d9b78349b24682c3518ac4a3.png~tplv-uwbnlip3yd-webp.webp"
        content="Comment body content."
        datetime="1 hour"
      >
        <template #actions>
          <span class="action"> <IconMessage /> Reply </span>
        </template>
        <yc-comment
          author="Austen"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"
          content="Reply content"
          datetime="1 hour"
        >
          <template #actions>
            <span class="action"> <IconMessage /> Reply </span>
          </template>
        </yc-comment>
        <yc-comment
          author="Plato"
          avatar="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          content="Reply content"
          datetime="1 hour"
        >
          <template #actions>
            <span class="action"> <IconMessage /> Reply </span>
          </template>
        </yc-comment>
      </yc-comment>
    </yc-comment>
    <!-- descriptions -->
    <yc-descriptions :column="3" :data="data" title="User Info" bordered>
      <yc-descriptions-item
        v-for="item of data"
        :label="item.label"
        :span="item.span ?? 1"
      >
        <yc-tag>{{ item.value }}</yc-tag>
      </yc-descriptions-item>
    </yc-descriptions>
    <!-- empty -->
    <yc-empty style="height: fit-content; width: fit-content" />
    <!-- image -->
    <yc-image
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
      title="A user’s avatar"
      description="Present by Arco Design"
      :width="260"
      style="margin-right: 67px; vertical-align: top"
    >
      <template #extra>
        <div class="actions">
          <span class="action"><icon-eye /></span>
          <span class="action"><icon-download /></span>
          <yc-tooltip content="A user’s avatar">
            <span class="action"><icon-info-circle /></span>
          </yc-tooltip>
        </div>
      </template>
    </yc-image>
    <!-- list -->
    <yc-list
      :max-height="560"
      :scrollbar="false"
      :data="list"
      :style="{ width: `600px` }"
      @reach-bottom="handleReach"
    >
      <template #scroll-loading>
        <yc-spin :loading="true" style="width: 100%">
          <div style="height: 30px; width: 100%"></div>
        </yc-spin>
      </template>
      <template #item="{ item, index }">
        <yc-list-item :key="index">
          <yc-list-item-meta
            :title="item.title"
            :description="item.description"
          >
            <template #avatar>
              <yc-avatar shape="square"> A </yc-avatar>
            </template>
          </yc-list-item-meta>
        </yc-list-item>
      </template>
    </yc-list>
    <!-- popover -->
    <yc-space>
      <yc-popover title="Title">
        <yc-button>Hover Me</yc-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </yc-popover>
      <yc-popover title="Title" trigger="click">
        <yc-button>Click Me</yc-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </yc-popover>
    </yc-space>
    <!-- Statistic -->
    <div style="display: flex; flex-direction: column; align-items: center">
      <yc-countdown title="Countdown" format="HH:mm:ss.SSS" :start="start" />
      <yc-button @click="start = !start">点击开启及时</yc-button>
    </div>
    <!-- tabs -->
    <yc-tabs default-active-key="2">
      <yc-tab-pane path="1" title="Tab 1"> Content of Tab Panel 1 </yc-tab-pane>
      <yc-tab-pane path="2" title="Tab 2"> Content of Tab Panel 2 </yc-tab-pane>
      <yc-tab-pane path="3">
        <template #title>Tab 3</template>
        Content of Tab Panel 3
      </yc-tab-pane>
    </yc-tabs>
    <!-- tag -->
    <yc-space wrap style="max-width: 100%">
      <div v-for="(color, index) of colors" :key="index">
        <yc-tag :color="color" closable>{{ color }}</yc-tag>
      </div>
    </yc-space>
    <!-- timeline -->
    <yc-timeline>
      <yc-timeline-item label="2017-03-10" dotColor="#00B42A">
        The first milestone
      </yc-timeline-item>
      <yc-timeline-item label="2018-05-22"
        >The second milestone</yc-timeline-item
      >
      <yc-timeline-item label="2020-06-22" dotColor="#F53F3F">
        The third milestone
        <IconExclamationCircleFill
          :style="{ color: 'F53F3F', fontSize: '12px', marginLeft: '4px' }"
        />
      </yc-timeline-item>
      <yc-timeline-item label="2020-09-30" dotColor="#C9CDD4">
        The fourth milestone
      </yc-timeline-item>
    </yc-timeline>
    <!-- tooltip -->
    <yc-space>
      <yc-tooltip content="This is tooltip content">
        <yc-button>Mouse over to display tooltip</yc-button>
      </yc-tooltip>
      <yc-tooltip
        content="This is a two-line tooltip content.This is a two-line tooltip content."
      >
        <yc-button>Mouse over to display tooltip</yc-button>
      </yc-tooltip>
    </yc-space>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { IndicatorPosition, IndicatorType } from '@/components/Carousel';
const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
];
const indicatorType = ref<IndicatorType>('dot');
const indicatorPosition = ref<IndicatorPosition>('bottom');
const colors = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'arcoblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];
const data = [
  {
    label: 'Name',
    value: 'Socrates',
    span: 2,
  },
  {
    label: 'Mobile',
    value: '123-1234-1234',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing',
  },
];
const start = ref<boolean>(false);
const list = reactive(
  Array(10)
    .fill(null)
    .map((_, index) => {
      const prefix = `0000${index}`.slice(-5);
      return {
        title: 'Beijing Bytedance Technology Co., Ltd.',
        description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
      };
    })
);
const handleReach = () => {
  setTimeout(() => {
    list.push(
      ...Array(10)
        .fill(null)
        .map((_, index) => {
          const prefix = `0000${index}`.slice(-5);
          return {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,
          };
        })
    );
  }, 2000);
  console.log('触底了');
};
</script>

<style lang="less" scoped>
.datyc-show {
  height: 300vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.1s;
  }
  .icon-hover:hover {
    background-color: rgb(var(--gray-2));
  }
}
</style>
