import React, { Component } from 'react'
import styles from './About.less';

const PartnerPage = () => {
  return (
    <ul className={styles.aboutusSectionlist}>
      <li className={styles.aboutusSection}>
        <p>
          <span className={styles.aboutusBigtitle}>保鲜期返利网简介:</span>
        </p>
      </li>
      <li className={styles.aboutusSection}>
        <p>保鲜期返利网成立于2013年8月，是国内专业的网络购物门户网站，以第三方的身份提供客观公正的网购向导服务。时至今日，保鲜期的合作商家超过600家，覆盖国内主流的B2C电子商务平台。</p>
        <p>这是一个折扣网站，保鲜期低价折扣返利商品；这是一个返利网站，去淘宝、商城、团购网站购物均可返利；这是一个纯买家社区，几十万真实用户的在线交流帮您一起购物。</p>
        <p>在我们的网站里，您可以网络购物更加省钱、更加精彩！加入保鲜期，抢折扣、拿返利、看分享。</p>
      </li>
      <li className={styles.aboutusSection}>
        <p>
          <span className={styles.aboutusBigtitle}>公司信息</span>
        </p>
        <p>
          <span className={styles.aboutusSmallbold}>公司：</span>武汉四三一八网络科技有限公司
				</p>
        <p>
          <span className={styles.aboutusSmallbold}>地址：</span>湖北省武汉市东湖开发区武大科技园豪迈大厦一栋802室
				</p>
        <p>
          <span className={styles.aboutusSmallbold}>电话：</span>027—81314789
				</p>
      </li>
    </ul>
  );
}

export default PartnerPage;
