/**
 * iframe: true
 */
import { ApiHeader, DumiSiteProvider } from '@39nyx/dumi-theme-skk';
import { AntDesignOutlined } from '@ant-design/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <DumiSiteProvider>
    <Flexbox padding={24}>
      <ApiHeader
        title={'Button 按钮'}
        pkg={'antd'}
        componentName={'Button'}
        description={'Ant Design 的按钮'}
        serviceList={[
          {
            label: 'Ant Design 官网',
            icon: <AntDesignOutlined />,
            children: 'Ant Design',
            url: 'https://ant.design',
          },
        ]}
        docUrl={'https://ant.design/components/button-cn'}
        sourceUrl={
          'https://github.com/ant-design/ant-design/blob/master/components/button/index.ts'
        }
      />
    </Flexbox>
  </DumiSiteProvider>
);
