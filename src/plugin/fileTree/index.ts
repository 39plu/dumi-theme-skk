import { IApi, unistUtilVisit } from 'dumi';

interface IFileTreeItem {
  title: string;
  metadata: {
    status?: 'added' | 'removed' | 'modified';
    important?: boolean;
    extension?: string;
  };
  type?: 'file' | 'folder';
  children?: [];
}

// 解析名称：提取元数据和清理名称
function parseName(rawName: string) {
  const result: IFileTreeItem = {
    title: rawName,
    metadata: {},
  };

  // 匹配前缀符号（如 ++, --）
  const prefixMatch = rawName.match(/^([+\-*!]+)\s*(.*)$/);
  if (prefixMatch) {
    const prefix = prefixMatch[1];
    result.title = prefixMatch[2].trim();

    // 根据前缀设置元数据
    if (prefix.includes('+')) {
      result.metadata.status = 'added';
    }
    if (prefix.includes('-')) {
      result.metadata.status = 'removed';
    }
    if (prefix.includes('*')) {
      result.metadata.status = 'modified';
    }
    if (prefix.includes('!')) {
      result.metadata.important = true;
    }
  }

  // 匹配后缀扩展名
  const extMatch = result.title.match(/\.([a-z0-9]+)$/i);
  if (extMatch) {
    result.metadata.extension = extMatch[1];
  }

  return result;
}

// 处理列表项
function processListItem(root: any) {
  if (!root || !root.children || root.children.length === 0) {
    return null;
  }
  const result: IFileTreeItem = {
    title: '',
    metadata: {},
    children: [],
  };
  root.children.forEach((item: any) => {
    if (item.type === 'paragraph') {
      // 提取文本值作为名称
      const textNode = item.children.find((child: any) => child.type === 'text');
      if (textNode) {
        // 清理名称并提取元数据
        const { title, metadata } = parseName(textNode.value);
        result.title = title;
        // 添加元数据
        if (Object.keys(metadata).length > 0) {
          result.metadata = metadata;
        }
        result.type = 'file';
      }
    } else if (item.type === 'list') {
      result.children = item.children.map((child: any) => processListItem(child));
      result.type = 'folder';
    }
  });
  return result;
}

// 处理列表
function processList(root: any) {
  if (!root || !root.children || root.children.length === 0) {
    return null;
  }
  return root.children.map((child: any) => processListItem(child));
}

const fileTreePlugin = () => {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'containerDirective', (node, index, parent) => {
      if (node.name === 'file-tree') {
        let tree: any[] = [];
        const rootList = node.children.find((item: { type: string }) => item.type === 'list');
        if (rootList) {
          tree = processList(rootList);
        }
        parent!.children.splice(
          index!,
          1,
          {
            type: 'html',
            value: '<FileTreeContainer>',
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: JSON.stringify(tree),
              },
            ],
          },
          {
            type: 'html',
            value: '</FileTreeContainer>',
          },
        );
      }
    });
  };
};

export default (api: IApi) => {
  api.modifyConfig((memo) => {
    const cloneExtraRemarkPlugins = memo.extraRemarkPlugins;

    memo.extraRemarkPlugins = [
      fileTreePlugin,
      ...(Array.isArray(cloneExtraRemarkPlugins)
        ? cloneExtraRemarkPlugins
        : ([cloneExtraRemarkPlugins].filter(Boolean) as any)),
    ];
    return memo;
  });
};
