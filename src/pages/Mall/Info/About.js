import React, { Component } from 'react'
import styles from './About.less';

const AboutPage = () => {
	return (
		<ul className={styles.aboutusSectionlist}>
			<li className={styles.aboutusSection}>
				<p>保鲜期是真正为消费者省钱的购物平台。</p>
				<p>这里可以全网比价，可以购物返现，可以获取超值、时尚、有品质的优惠信息，这里拒绝虚假广告和软文。</p>
				<p>我们深知，聪明理性的消费者既知道羊毛不可错过，又知道不贪小利、不买无用或低质的商品，我们的目标是和你一起用最具性价比的方式选购优质商品。</p>
				<p>我们相信，网购高手在民间，购物和生活的智慧需要大家共同积累，我们希望通过分享和共建，让返利网成为消费者的网购信息宝库。</p>
				<p>我们和你一样，是追求生活品质的消费者，希望通过互相帮助，让你我都能够轻松购物、高质生活。</p>
			</li>
			<li className={styles.aboutusSection}>
				<p>
					<span className={styles.aboutusSmallbold}>公司理念：</span>靠谱、开放、分享、&nbsp;透明、拥抱变化。
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>公司愿景：</span> 做省钱和赚钱的应用平台。
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>公司态度：</span>用“傻逼”的执着，创造牛逼的结果&nbsp;。
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>核心价值观：</span>用户第一、合作伙伴第二、员工第三、股东第四&nbsp;。
				</p>
			</li>
			<li className={styles.aboutusSection}>
				<p>
					<span className={styles.aboutusBigtitle}>核心价值观体现了我们公司做事的准则：</span>
				</p>
				<p>1.没有广大用户的支持和信任我们不可能有发展也不可能有生存；</p>
				<p>2.没有合作伙伴之间的精诚合作，我们的用户也无法享受到更多的服务，商家也不能得到利益保证，这种合作关系是不会长久的；</p>
				<p>3.任何的组织都是有单一的个体组成，21世纪什么做重要？当然是人才！人才是我们做成任何一件事情的基础，平凡的人做出不平凡的事情，三个“傻逼”能创造出一个牛逼；</p>
			</li>
			<li className={styles.aboutusSection}>
				<p>
					<span className={styles.aboutusBigtitle}>特色服务</span>
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>信息比较：</span>商品价格、配送方式、支付方式、售后服务和商家信誉全方位比较帮助用户正确购买。
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>降价提醒：</span>对你想购买的产品设置价格提醒功能帮助你及时获悉到该产品的价格动态。
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>购物返现：</span>通过返利网去400多家返现商城购买商品可享受到返利 网额外的返现，让你实惠再实惠。
				</p>
				<p>
					<span className={styles.aboutusSmallbold}>促销优惠：</span>返利网商家促销活动每日更新，让你及时做好购买计划。
				</p>
			</li>
			<li className={styles.aboutusSection}>
				<p>
					<span className={styles.aboutusBigtitle}>我们的使命</span>
				</p>
				<p>1）消费者的网购顾问。</p>
				<p>2）消费者网上购物安全快捷的购物通道。</p>
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


export default AboutPage;