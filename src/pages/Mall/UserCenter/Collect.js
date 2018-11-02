import React, { Component, Fragment } from 'react';
import { Tabs, Divider, Card, Row, Col } from 'antd';
import styles from './Collect.less';
import './common.css';

const { Meta } = Card;

const dItem = {
  picture: "http://b1.hucdn.com/upload/item/1810/26/47613815492148_800x800.jpg!320x320.webp",
  name: "秋冬装女2018新款韩版外穿修身V领针织衫打底毛衣长袖女装上衣",
  price: "28.9",
  seller: 1234,
}
let datalist = [];
for (let i = 0; i < 20; i++) {
  datalist.push(dItem);
}

const operationTabList = [
  {
    key: 'goods',
    tab: (
      <span>
        商品
      </span>
    ),
  },
  {
    key: 'articles',
    tab: (
      <span>
        文章
      </span>
    ),
  },
  {
    key: 'videos',
    tab: (
      <span>
        视频
      </span>
    ),
  },
];

class CollectPage extends Component {

  onTabChange = key => {
    const { match } = this.props;
    console.log(key, match.url)
    // switch (key) {
    //   case 'articles':
    //     router.push(`${match.url}/articles`);
    //     break;
    //   case 'applications':
    //     router.push(`${match.url}/applications`);
    //     break;
    //   case 'projects':
    //     router.push(`${match.url}/projects`);
    //     break;
    //   default:
    //     break;
    // }
  };

  render() {
    const { location, listLoading, match } = this.props;
    return (
      <div className={styles.collect}>
        <Card
          // className={styles.tabsCard}
          bordered={false}
          tabList={operationTabList}
          activeTabKey={'goods'}
          onTabChange={this.onTabChange}
          loading={listLoading}
        >
          <Row gutter={24}>
            {datalist.map((item, index) => (
              <Col lg={6} sm={12} md={8} key={index}>
                <div className={styles.goodsBox}>
                  <div className={styles.goodsImgBox}>
                    <img className={styles.goodsImg} src={item.picture} />
                    <a className={styles.collectremove} href="javascript:;"></a>
                  </div>
                  <div className={styles.goodsName}>{item.name}</div>
                  <div className={styles.goodsDesc}>
                    <div className={styles.price}><span>￥</span>{item.price}</div>
                    <div className={styles.seller}><span>已售</span>{item.seller}<span>件</span></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    );
  }
}

export default CollectPage;
