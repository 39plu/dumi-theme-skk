import { IApi, unistUtilVisit } from 'dumi';

const mediumZoomPlugin = () => {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'image', (node, index, parent) => {
      parent!.children.splice(index!, 1, {
        type: 'html',
        value: `<img src="${node.url}" alt="${node.alt}" class="zoom-able" data-zoom-able />`,
      });
    });
  };
};

export default (api: IApi) => {
  api.modifyConfig((memo) => {
    const cloneExtraRemarkPlugins = memo.extraRemarkPlugins;

    memo.extraRemarkPlugins = [
      mediumZoomPlugin,
      ...(Array.isArray(cloneExtraRemarkPlugins)
        ? cloneExtraRemarkPlugins
        : ([cloneExtraRemarkPlugins].filter(Boolean) as any)),
    ];
    return memo;
  });

  api.addHTMLHeadScripts(() => {
    let mediumZoomCdn = 'https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js';
    if (api.userConfig.skk && api.userConfig?.skk?.mediumZoom?.cdn) {
      mediumZoomCdn = api.userConfig?.skk?.mediumZoom?.cdn;
    }
    return [
      {
        src: mediumZoomCdn,
      },
    ];
  });

  api.addHTMLStyles(() => {
    return `
      .zoom-able { cursor: zoom-in }
      .medium-zoom-overlay, .medium-zoom-image--opened { z-index: 980 }
    `;
  });

  api.addHTMLScripts(() => {
    return `
      const zoom = mediumZoom()
      document.body.onclick = (e) => {
        if (e.type === 'click') {
          const target = e.target
          const dataZoomAble = target.attributes.getNamedItem('data-zoom-able')
          if (dataZoomAble) {
            if (dataZoomAble.value === '') {
              zoom.attach(target)
              dataZoomAble.value = 'true'
              target.attributes.setNamedItem(dataZoomAble)
            }
          }
        }
      }
    `;
  });
};
