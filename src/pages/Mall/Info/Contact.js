import React, { Component } from 'react'
import styles from './About.less';

const ContactPage = () => {
  return (
    <ul className={styles.aboutusSectionlist}>
      <li className={styles.aboutusSection}>
        <p>
          <span className={styles.aboutusBigtitle}>武汉四三一八网络科技有限公司</span>
        </p>
      </li>
      <li className={styles.aboutusSection}>
        <p>如果您对我们的网站以及服务有任何疑问、意见或建议，请随时与我们在线客服取得联系！我们的客服人员会给您详尽细致的解答，您的意见或建议也将及时反馈，保鲜期返利网诚邀您的参与，共建更加美好的网购交流服务平台。</p>
      </li>
      <li className={styles.aboutusSection}>
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

export default ContactPage;
