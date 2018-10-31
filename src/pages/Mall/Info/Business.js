import React, { Component } from 'react'
import styles from './About.less';

const BusinessPage = () => {
  return (
    <ul className={styles.aboutusSectionlist}>
      <li className={styles.aboutusSection}>
        <p>保鲜期成立于2013年8月，是国内购物积分行业市场规模最大、用户活跃度最高的“第三方返利导购”平台。</p>
        <p>时至今日，保鲜期返利网的合作商家超过400家，覆盖国内主流的B2C电子商务平台。</p>
      </li>
      <li className={styles.aboutusSection}>
        <span className={styles.aboutusBigtitle}>什么样的商家和返利网合作能收到好的效果:</span>
        <p>1、热烈欢迎本身有较高知名度的网站和返利网强强联手，以各种形式合作共赢； </p>
        <p>2、以CPS方式合作的商家的产品应以日用品为主，有意愿有实力长期合作；</p>
        <p>3、CPS合作需要合作方有一定的技术能力，能根据返利网提供的技术文档制作合作接口，返利网可给予免费技术指导。</p>
      </li>
      <li className={styles.aboutusSection}>
        <p><span className={styles.aboutusBigtitle}>和保鲜期返利网合作的模式：</span></p>
        <p>一、 广告</p>
        <p>预通过保鲜期返利网投放商业广告请参阅“广告服务”菜单内容。</p>
        <p>二、CPS合作</p>
        <p><span className={styles.aboutusBigtitle}>开始合作前：</span></p>
        <p>1、签订合作协议—交纳相关费用—完成技术接口</p>
        <p><span className={styles.aboutusBigtitle}>开始合作后：</span></p>
        <p>2、保鲜期返利网提供专属页面，引导会员去合作商家下订单；</p>
        <p>3、商家实时将订单数据通过接口发送给保鲜期返利网；</p>
      </li>
    </ul>
  );
}

export default BusinessPage;
