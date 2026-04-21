import { NavLink, useLocation, useNavData } from 'dumi';
import { memo } from 'react';

import { handleFullSidebarData } from '@39nyx/dumi-theme-skk/utils/sidebar';
import { useFullSidebarData } from 'dumi/dist/client/theme-api';
import { INavItem, ISidebarGroup } from 'dumi/dist/client/theme-api/types';
import { useStyles } from './style';

interface SidebarProps {
  onSelect?: () => void;
}

function getLeafNodeLink(tree: INavItem) {
  const result: string[] = [];
  const list: INavItem[] = [tree];
  while (list.length) {
    const node = list.shift();
    if (node && node.children) {
      list.push(...node.children);
    } else {
      result.push(node?.link || '');
    }
  }
  return result.filter((item: string) => !!item);
}

/**
 * 判断path1是否包含path2
 * @param path1
 * @param path2
 */
function pathInclude(path1: string, path2: string) {
  if (path1.startsWith(path2)) {
    const arr1 = path1.split('/');
    const arr2 = path2.split('/');
    return arr2.every((item, index) => {
      return item === arr1[index];
    });
  }
  return false;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const fullSidebar: Record<string, ISidebarGroup[]> = useFullSidebarData();
  const nav = useNavData();
  let navPaths: string[] = [];
  nav
    .filter((item) => {
      return item.children && item.children.length;
    })
    .forEach((item) => {
      navPaths = getLeafNodeLink(item);
    });
  const location = useLocation();
  let activeSidebar: ISidebarGroup[] = [];

  const navPath: string | undefined = navPaths.find((path: string) => {
    return pathInclude(location.pathname, path) && !!fullSidebar[path];
  });
  if (navPath) {
    activeSidebar = fullSidebar[navPath] || [];
  } else {
    const sidebar = handleFullSidebarData(fullSidebar);
    const paths = location.pathname.split('/').filter((item) => item);
    const activeKey: string = `/${paths[0]}`;
    activeSidebar = sidebar[activeKey] || [];
  }
  const { styles } = useStyles();
  const isEmptySideBar = !fullSidebar;

  const onSelect = () => {
    if (typeof props.onSelect === 'function') {
      props.onSelect();
    }
  };
  return isEmptySideBar ? null : (
    <div className={styles.sidebar}>
      {activeSidebar.map((item, i) => (
        <dl key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link} onClick={onSelect}>
              <NavLink to={child.link} title={child.title} end>
                {child.title}
              </NavLink>
            </dd>
          ))}
        </dl>
      ))}
    </div>
  );
};

export default memo(Sidebar);
