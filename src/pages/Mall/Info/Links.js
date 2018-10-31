import React, { Component } from 'react'
import styles from './About.less';

const LinksPage = () => {
  return (
    <ul className={styles.aboutusSectionlist}>
      <li className={styles.aboutusSection}>
        <p><span className={styles.aboutusBigtitle}>交换链接要求：</span></p>
        <p>1、您的网站交换友链的页面PR值&gt;=6</p>
        <p>2、您的网站交换友链为网站首页</p>
        <p>3、您的网站请不要包含D版/政治/黄色等不良内容</p>
      </li>
      <li className={styles.aboutusSection}>
        <p><span className={styles.aboutusMmallbold}>首页要求：</span>1.PR大于等于6；2.百度谷歌收录正常且收录量大于200；3.无惩罚记录。</p>
        <p><span className={styles.aboutusMmallbold}>内页要求：</span>1.PR大于等于4；2.百度谷歌收录正常且收录量大于200，3. 无惩罚记录。</p>
        <p>请需要交换友情的网站说明PR和搜索引擎收录状况。</p>
        <p>不符合以上要求的请勿扰。</p>
      </li>
      <li className={styles.aboutusSection}>
        <p><span className={styles.aboutusBigtitle}>如果您希望交换友情链接,并符合以上条件,欢迎联系我们</span></p>
        <p><span className={styles.aboutusMmallbold}>E-mail:</span>admin4318@cunqianguan.me</p>
        <p><span className={styles.aboutusMmallbold}>本站链接信息：</span>http://www.baoxianqi.com</p>
      </li>
    </ul>
  );
}

export default LinksPage;
