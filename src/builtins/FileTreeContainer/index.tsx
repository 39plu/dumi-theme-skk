import { FileOutlined, FolderOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import React, { useState } from 'react';

function treeTransform(nodes: any[]) {
  return nodes.map((node: any) => {
    let children = null;
    if (node.children && node.children.length > 0) {
      children = treeTransform(node.children);
    }
    const result: any = {
      title: node.title,
      key: Math.random().toString(36),
      icon: node.type === 'file' ? <FileOutlined /> : <FolderOutlined />,
    };
    if (children) {
      result.children = children;
    }
    return result;
  });
}

const FileTreeContainer: React.FC<any> = (props) => {
  const [showLeafIcon] = useState<React.ReactNode>(false);
  const { children } = props.children.props || {};
  let tree = [];
  if (children && typeof children === 'string') {
    try {
      tree = JSON.parse(children);
    } catch (e) {
      console.error(e);
    }
  }
  console.log(tree);
  const treeData = treeTransform(tree);
  console.log(treeData);

  return (
    <div {...props} style={{ border: '1px solid rgb(228, 233, 236)', padding: 20, ...props.style }}>
      <Tree showLine={{ showLeafIcon }} treeData={treeData} showIcon={true} blockNode={true} />
    </div>
  );
};

export default FileTreeContainer;
