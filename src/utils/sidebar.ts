import { ISidebarGroup, ISidebarItem } from 'dumi/dist/client/theme-api/types';
import { cloneDeep } from 'lodash';

/**
 * 合并两个侧边栏数据
 * @param fullSidebarData
 * @param nextFullSidebarData
 */
function mergeSidebarGroup(
  fullSidebarData: ISidebarGroup[],
  nextFullSidebarData: ISidebarGroup[],
): ISidebarGroup[] {
  const map: Record<string, ISidebarGroup> = {};
  const forEachCallback = (group: ISidebarGroup) => {
    const key: string = group.title || '';
    if (!map[key]) {
      map[key] = {
        title: group.title,
        order: group.order,
        children: group.children,
      };
    } else {
      if (map[key].order > group.order) {
        map[key].order = group.order;
      }
      map[key].children.push(...group.children);
      map[key].children.sort((a: ISidebarItem, b: ISidebarItem) => {
        if (a.order !== undefined && b.order !== undefined && a.order > b.order) {
          return 1;
        }
        return -1;
      });
    }
  };
  fullSidebarData.forEach(forEachCallback);
  nextFullSidebarData.forEach(forEachCallback);
  return Object.values(map)
    .map((group) => {
      return group;
    })
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined && a.order > b.order) {
        return 1;
      }
      return -1;
    });
}

/**
 * 处理完整的侧边栏数据
 * @param fullSidebarData
 */
export function handleFullSidebarData(
  fullSidebarData: Record<string, ISidebarGroup[]>,
): Record<string, ISidebarGroup[]> {
  const nextFullSidebarData: Record<string, ISidebarGroup[]> = {};
  Object.keys(fullSidebarData).forEach((key: string) => {
    const oldKey = key;
    let newKey = key;
    if (newKey.split('/').length > 2) {
      newKey = `/${newKey.split('/')[1]}`;
    }
    if (!nextFullSidebarData[newKey]) {
      nextFullSidebarData[newKey] = fullSidebarData[oldKey];
    } else {
      nextFullSidebarData[newKey] = mergeSidebarGroup(
        cloneDeep(fullSidebarData[oldKey]),
        cloneDeep(nextFullSidebarData[newKey]),
      );
    }
  });
  return nextFullSidebarData;
}
