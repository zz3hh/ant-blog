import React from 'react';
import classNames from 'classnames';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col } from 'antd';
import Link from 'umi/link';
import styles from './index.less';

const GlobalCourse = ({ className, links, copyright }) => {
  const clsString = classNames(styles.virtuebox, className);
  return (
    <Row gutter={24} className={styles.webquestionbox}>
      <Col lg={4} sm={12} md={8} className={styles.qhbox}>
        <p className={styles.webqtitle}>返利教程</p>
        <a href="javascript:;" className={styles.webqherf}>什么是购物返利</a>
        <a href="javascript:;" className={styles.webqherf}>如何获得购物返利</a>
        <a href="javascript:;" className={styles.webqherf}>返利有什么用</a>
      </Col>
      <Col lg={4} sm={12} md={8} className={styles.qhbox}>
        <p className={styles.webqtitle}>订单教程</p>
        <a href="javascript:;" className={styles.webqherf}>什么是订单跟踪</a>
        <a href="javascript:;" className={styles.webqherf}>跟单失败怎么办</a>
        <a href="javascript:;" className={styles.webqherf}>订单何时返利</a>
      </Col>
      <Col lg={4} sm={12} md={8} className={styles.qhbox}>
        <p className={styles.webqtitle}>兑现教程</p>
        <a href="javascript:;" className={styles.webqherf}>如何申请兑现</a>
        <a href="javascript:;" className={styles.webqherf}>为什么不能兑现</a>
        <a href="javascript:;" className={styles.webqherf}>兑现多久到账</a>
      </Col>
      <Col lg={4} sm={12} md={8} className={styles.qhbox}>
        <p className={styles.webqtitle}>礼物兑换</p>
        <a href="javascript:;" className={styles.webqherf}>兑换礼品的运费</a>
        <a href="javascript:;" className={styles.webqherf}>兑换礼品的配送</a>
        <a href="javascript:;" className={styles.webqherf}>兑换礼品的售后服务</a>
      </Col>
      <Col lg={4} sm={12} md={8} className={styles.qhbox}>
        <p className={styles.webqtitle}>基础知识</p>
        <a href="javascript:;" className={styles.webqherf}>什么是积分</a>
        <a href="javascript:;" className={styles.webqherf}>什么是集分宝</a>
        <a href="javascript:;" className={styles.webqherf}>什么是现金返利</a>
      </Col>
      <Col lg={4} sm={12} md={8} className={styles.qhbox}>
        <p className={styles.contcatcell}>027-81314789</p>
        <p className={styles.contcattime}>周一至周五 9：00 - 18：00</p>
        <a href="javascript:;" className={styles.onlinehelper}>联系在线客服</a>
      </Col>
    </Row>
  );
};

export default GlobalCourse;

export { GlobalCourse };
