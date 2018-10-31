import React, { PureComponent, Fragment } from 'react';
import { Icon, Row, Col, Divider } from 'antd';
import { GlobalFooter, GlobalOther } from '@/components/Mall/GlobalFooter';
import GlobalDesc from '@/components/Mall/GlobalDesc';
import GlobalCourse from '@/components/Mall/GlobalCourse';
import styles from './index.less';


const links = [{
  key: 'job',
  title: '人才招聘',
  href: '/job',
}, {
  key: 'about',
  title: '关于我们',
  href: '/about',
}, {
  key: 'contact',
  title: '联系我们',
  href: '/contact',
}, {
  key: 'help',
  title: '帮助中心',
  href: '/help',
}, {
  key: 'business',
  title: '商务合作',
  href: '/business',
}, {
  key: 'partner',
  title: '广告服务',
  href: '/partner',
}, {
  key: 'links',
  title: '友情链接',
  href: '/links',
},]

const IndexPage = () => (
  <div className={styles.footerbox}>
    <GlobalDesc />
    <Divider />
    <GlobalCourse />
    <Divider />
    <Row gutter={24}>
      <Col lg={12}>
        <GlobalFooter
          className={styles.textLeft}
          links={links}
          copyright={
            <Fragment>
              Copyright <Icon type="copyright" /> 2018-2020 <a href="https://www.baoyatao.com">baiyatao.com</a> 湘ICP备12008186号-1
        </Fragment>
          }
        />
      </Col>
      <Col lg={12}>
        <GlobalOther />
      </Col>
    </Row>
  </div>
)


export default IndexPage;
