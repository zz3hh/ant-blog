import React from 'react';
import classNames from 'classnames';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col } from 'antd';
import styles from './index.less';

const GlobalDesc = ({ className, links, copyright }) => {
  const clsString = classNames(styles.virtuebox, className);
  return (
    <Row gutter={24} className={clsString}>
      <Col lg={6}>
        <div className={classNames(styles.boxItem, styles.itema)}></div>
        <span>让您的电脑帮您赚钱 </span>
      </Col>
      <Col lg={6}>
        <div className={classNames(styles.boxItem, styles.itemb)}></div>
        <span>返利如此简便轻松</span>
      </Col>
      <Col lg={6}>
        <div className={classNames(styles.boxItem, styles.itemc)}></div>
        <span>给自己多一种可能</span>
      </Col>
      <Col lg={6}>
        <div className={classNames(styles.boxItem, styles.itemd)}></div>
        <span>返利比例全网最高</span>
      </Col>
    </Row>
  );
};

export default GlobalDesc;

export { GlobalDesc };
