import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Card, Row, Col, Icon, Avatar, Tag, Divider, Spin, Input, List } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';

const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }
listData.push({
  href: 'http://ant.design',
  title: `cnode社区静态资源域名改造`,
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  description: 'cnode一直是使用七牛的对象存储和cdn加速服务，之前在七牛开启对象存储bucket是配域名的，现在由于审核或者安全方面的原因，七牛把那些配赠的域名都定义成了『测试域名』，给定了下线时间。所以cnode需要改造成自定义域名的方式来访问七牛的对象存储资源。',
});

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const RegisterResult = ({ location }) => (
  <Row gutter={24}>
    <Col lg={17} md={24}>
      <Card
        bordered={false}
      >
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          footer={<div><b>ant design</b> footer part</div>}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </Col>
    <Col lg={7} md={24}>
      <Card bordered={false} style={{ marginBottom: 24 }} title="本周热议">
          <ul>
            <li>
              本周热议我们的开发速度为什么那么慢<IconText type="message" text="2" />
            </li>
          </ul>
      </Card>
      <Card bordered={false} style={{ marginBottom: 24 }} title="社区赞助商">
      </Card>
    </Col>
  </Row>
);

export default RegisterResult;
