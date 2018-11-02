import React, { Component, Fragment } from 'react';
import { Row, Col, Divider, Table } from 'antd';
import { Link } from 'umi/router';
import styles from './Exchange.less';


const addressList = [];


class ExchangePage extends Component {
  constructor(props) {
    super(props);
  }
  columns = [{
    title: '兑换商品名称',
    dataIndex: 'linkMan',
    key: 'linkMan',
  }, {
    title: '兑换账号',
    dataIndex: 'mobile',
    key: 'mobile',
  }, {
    title: '消耗积分',
    dataIndex: 'addressDesc',
    key: 'addressDesc',
  }, {
    title: '兑换时间',
    dataIndex: 'postalcode',
    key: 'postalcode',
  }, {
    title: '兑换状态',
    dataIndex: 'postalcode',
    key: 'status',
  }, {
    title: "操作",
    key: "actions",
    render: (text, record) => (
      <span>
        <a href="javascript:;" onClick={() => {}}>修改</a>
        <Divider type="vertical" />
        <a href="javascript:;" onClick={() => {}}>删除</a>
      </span>
    ),
  }]

  render() {
    return (
      <div className={styles.exchangebox}>
        <Row gutter={24}>
          <Col lg={8}>
            <div className={styles.leftBox}>
              <div className={styles.usercenterIntegral}>
                <p className={styles.integralNumber}>我的积分：<span>352</span></p>
                <div className={styles.integralNotice}>
                  <span className={styles.integralNoticespan}>注：</span>
                  <p className={styles.integralNoticep}>当您的积分不足以兑换所选商品时，系统会自动将您的现金或集分宝兑换成积分来补足差额。</p>
                </div>
                <p className={styles.integralRatio}>兑换比例：1元=100积分，1个集分宝=1个积分</p>
              </div>
              <a className={styles.goIntegralcenter} href="javascript:;">去兑换中心看看</a>
            </div>
          </Col>
          <Col lg={16}>
            <div className={styles.rightBox}>
              <div className={styles.rightHeaderTitle}>
                <Divider type="vertical" style={{ background: "#2db8ad", width: "3px" }} />
                热门商品
              </div>
              <Row gutter={24}>
                <Col lg={6}>
                  <div className={styles.goodsBox}>
                    <div className={styles.imgBox}>
                      <img className={styles.goodsPicture} src="http://b1.hucdn.com/upload/item/1810/26/47613815492148_800x800.jpg!320x320.webp" />
                    </div>
                    <div className={styles.goodsName}>秋冬装女2018新款韩版外穿修身V领针织衫打底毛衣长袖女装上衣</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={styles.goodsBox}>
                    <div className={styles.imgBox}>
                      <img className={styles.goodsPicture} src="http://b1.hucdn.com/upload/item/1810/26/47613815492148_800x800.jpg!320x320.webp" />
                    </div>
                    <div className={styles.goodsName}>秋冬装女2018新款韩版外穿修身V领针织衫打底毛衣长袖女装上衣</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={styles.goodsBox}>
                    <div className={styles.imgBox}>
                      <img className={styles.goodsPicture} src="http://b1.hucdn.com/upload/item/1810/26/47613815492148_800x800.jpg!320x320.webp" />
                    </div>
                    <div className={styles.goodsName}>秋冬装女2018新款韩版外穿修身V领针织衫打底毛衣长袖女装上衣</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={styles.goodsBox}>
                    <div className={styles.imgBox}>
                      <img className={styles.goodsPicture} src="http://b1.hucdn.com/upload/item/1810/26/47613815492148_800x800.jpg!320x320.webp" />
                    </div>
                    <div className={styles.goodsName}>秋冬装女2018新款韩版外穿修身V领针织衫打底毛衣长袖女装上衣</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Table className={styles.exchangeList} columns={this.columns} rowKey={record => record._id} bordered dataSource={addressList} />
      </div>
    );
  }
}

export default ExchangePage;
