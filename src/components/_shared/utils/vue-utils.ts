import { RenderContent } from '../type';
import { Comment, Fragment, Text, h, VNode, isVNode, toValue } from 'vue';
import { isFunction, isObject } from './is';
import {
  ObjectData,
  MaybeElement,
  MaybeComputedElementRef,
  UnRefElementReturn,
  VueInstance,
} from '../type';

// 获取renderFunction
export const getSlotFunction = (param: RenderContent | undefined) => {
  if (param) {
    if (isFunction(param)) return param;
    return () => param;
  }
  return undefined;
};

// 包裹文本节点
function wrapTextContent(s: string | VNode) {
  return h(
    'span',
    {
      class: {
        'only-child__content': true,
      },
    },
    s
  );
}

// 在vnode数组中查找第一个合法的子元素
export function findFirstLegitChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null;
  const children = node as VNode[];
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case 'svg':
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children as VNode[]);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}

// 扁平化插槽components
export function findComponentsFromVnodes(vnodes: VNode[], name: string) {
  const result: ObjectData[] = [];
  // 是否是option
  const traverse = (nodes: ObjectData | ObjectData[]) => {
    if (!nodes) return;
    const nodeList = Array.isArray(nodes) ? nodes : [nodes];
    for (const node of nodeList) {
      if (!isVNode(node)) continue;
      const type = node.type;
      const children = node.children;
      const subTree = node.component?.subTree;
      // 查找
      if (isObject(type) && type.name === name) {
        result.push(node);
      }
      // 处理subtree的情况
      if (subTree) {
        traverse(subTree);
      }
      // 处理children是vnode
      else if (Array.isArray(children)) {
        traverse(children);
      }
      // 处理children是slot的情况
      else if (isObject(children)) {
        for (const key of Object.keys(children)) {
          if (!isFunction(children[key])) continue;
          traverse(children[key]?.() || []);
        }
      }
    }
  };
  traverse(vnodes);
  return result;
}

// unrefe
export function unrefElement<T extends MaybeElement>(
  elRef: MaybeComputedElementRef<T>
): UnRefElementReturn<T> {
  const plain = toValue(elRef);
  return (plain as VueInstance)?.$el ?? plain;
}
