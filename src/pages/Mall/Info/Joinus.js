import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'umi/link';
import { Spin } from 'antd';
import styles from './Joinus.less';

const mockData = {
  "it": [{
    jobName: "php高级软件工程师",
    jobDesc: `<p>1、参与开发高流量、高性能的B2C网站和社区；</p>
      <p>2、负责项目需求分析和系统分析；</p>
      <p>3、制订技术解决方案；</p>
      <p>4、研发基于LAMP，WAMP技术架构的网络应用系统；</p>
      <p>5、网站数据库的优化调整；</p>
      <p>6、能独立开发一个复杂项目。</p>`,
    jobSkill: `<p>1、本科及以上学历，计算机相关专业毕业，有互联网公司开发经验者优先；</p>
      <p>2、熟练掌握PHP开发语言，使用PHP开发WEB项目经验在2年以上；</p>
      <p>3、基本掌握javascript，熟练使用jquery,prototype,thinkajax,dwr中的一种javascript框架；</p>
      <p>4、熟练使用MYSQL数据库；</p>
      <p>5、熟练使用OOP理念编程，代码结构清晰；</p>
      <p>6、有较强的学习能力和适应能力；</p>
      <p>7、做事认真细心，有较为丰富的网站故障排查优化能力；</p>
      <p>8、态度严谨，能承担高负荷的工作，有良好的团队合作精神。</p>`
  }],
  "yy": [{
    jobName: "网络推广高级专员",
    jobDesc: `<p>1、负责网络推广，通过有效的手段在各网站进行推广工作，严格监控实施过程，及时跟踪推广效果；</p>
      <p>2、根据行业特点和自身现状，制定并执行有效的网络推广方案；提高网络知名度，访问量及传播效果；</p>
      <p>3、熟悉网络推广手段，负责部分平台日常维护；</p>
      <p>4、与其他网站进行资源互换等合作，开拓网站的外部链接、合作的网络媒体，负责日常合作网站的管理及维护；</p>
      <p>5、市场开发与推广，通过不同途径的推广，对网站流量经营指标负责。</p>`,
    jobSkill: `<p>1、3年以上网络营销工作经验，具有网络营销渠道者优先；</p>
      <p>2、能熟练利用各类网络推广方式开展公司网站和相关产品推广工作；</p>
      <p>3、熟悉互联网络，熟练使用网络交流工具和各种办公软件；</p>
      <p>4、对工作有激情，积极主动，有责任心、执行力强、服从安排，具备较强的学习能力和优秀的团队协作精神；</p>
      <p>5、精通BBS、社区、blog、微信、交友圈子等网络推广方式。</p>`,
  }],
  "chp": [{
    jobName: "市场推广高级策划",
    jobDesc: `<p>1、参与提案，负责策划方案的文字撰写；</p>
    <p>2、负责互联网广告的策划、推广、执行等工作；</p>
    <p>3、负责项目的策划方案，宣传推广文案及宣传资料文案的设计和撰写，参与重要项目的创意构思，项目策划；</p>
    <p>4、撰写各类稿件、总结报告及其他文字创作；</p>
    <p>5、了解、分析市场情况，及时掌握市场动态，收集分析行业数据，形成定期报告；</p>
    <p>6、充分调动最大创意能力及最佳创意效率，完成各类宣传资料、广告表现的创意与设计等，积极配合项目人员，准时、高效、优质完成所负责的项目广告设计、修改直至完稿确认。</p>`,
    jobSkill: `<p>1、本科及以上学历，3年及以上相关岗位从业经验；</p>
    <p>2、工作踏实、认真，有进取心，有责任心，能适应较强工作压力；</p>
    <p>3、具有良好的沟通能力和团队意识，能较好的协调各方面的工作；</p>
    <p>4、具有策划及实施能力； </p>
    <p>5、条理清晰，善于言谈，适应多任务的工作节奏；</p>
    <p>6、逻辑思维清晰，做事认真细致，协助团队完成任务；</p>
    <p>7、良好的文字功底，擅长编写品牌策划文案及产品文案，有产品策划的整体思维；</p>
    <p>8、能独立撰写相关策划方案，具有敏锐的观察力和创新意识；能充分理解企业需求及相关品牌差异化。</p>`
  }],
  "shch": [{
    jobName: "客户服务专员",
    jobDesc: `<p>1、接听会员来电，处理返利网会员的咨询和问题；</p>
    <p>2、发现记录问题并及时存档汇报；</p>
    <p>3、负责会员的维护以及回访跟踪，提升会员满意度；</p>
    <p>4、完成上级交办的其他工作。</p>`,
    jobSkill: `<p>1、熟悉网络购物，了解网络购物流程；（没有网络购物经验的，请勿投简历）</p>
    <p>2、大专以上学历，口齿清晰，普通话标准，声音甜美；</p>
    <p>3、有呼叫中心工作经验，应届生条件优秀者可放宽；</p>
    <p>4、善于沟通，语言表达能力好，有耐心，工作认真负责，具有良好的服务意识；</p>
    <p>5、抗压能力强，能积极配合公司在项目时间上的安排。</p>`
  }],
  "zh": []
}

class JoinusPage extends Component {
  constructor(props) {
    super(props);
    const { match, location } = props;

    const key = location.pathname.replace(`${match.path}/`, '');
    const { query: { tab } } = location;
    this.state = {
      mode: 'inline',
      selectKey: 'about',
      commonPath: key,
      tab: tab || 'it',
      loading: true,
      list: [],
    }
  }

  componentDidMount() {
    const { tab } = this.state;
    this.loadJobsList(tab);
  }

  loadJobsList = (tab) => {
    const { dispatch } = this.props;
    const that = this;
    this.setState({
      loading: true,
    });
    setTimeout(function () {
      that.setState({
        loading: false,
        list: mockData[tab]
      });
    }, 1000);
  }

  onChangeTab = (key) => {
    const { tab } = this.state;
    if (tab !== key) {
      this.setState({
        tab: key
      });
      this.loadJobsList(key);
    } else {
      return false;
    }
  }

  render() {
    const { commonPath, tab, loading, list } = this.state;
    let children = (<Spin />)
    if (!loading) {
      if (list.length) {
        children = list.map((item,index) => {
          return (
            <li className={styles.aboutusSection} key={index}>
              <p><span className={styles.aboutusBigtitle}>{item.jobName}</span></p>
              <p><span className={styles.aboutusSmallbold}>岗位职责：</span></p>
              <div dangerouslySetInnerHTML = {{ __html:item.jobDesc }}></div>
              <p><span className={styles.aboutusSmallbold}>任职要求：</span></p>
              <div dangerouslySetInnerHTML = {{ __html:item.jobSkill }}></div>
            </li>
          );
        })
      } else {
        children = (
          <div>暂无招聘岗位需求</div>
        );
      }
    }
    return (
      <ul className={styles.aboutusSectionlist}>
        <li className={styles.aboutusSection}>
          <p>保鲜期返利网成立于2013年8月，是国内电商类CPS效果营销服务提供商，公司成立以来，一直致力于成为国内返利行业市场规模最大、用户活跃度最高的“第三方返利导购”平台。</p>
          <p>在公司里，我们提倡开放、自由的工作氛围，我们更注重由团队成果带来的个人成就的提高。我们认为：每一个员工都是独一无二的，对我们都至关重要；公司非常注重用户体验，也和注重用户一样关注员工体验，非常在意员工是不是喜欢自己的工作；我们组织各种活动，营造像家一样的工作气氛，同事们一起工作、一起吃饭、一起运动、一起狂欢，每周都有丰富多彩的团队活动。</p>
        </li>
        <li className={styles.aboutusSection}>
          <div className={styles.joinusPartboxs}>
            <Link className={classNames(styles.joinusPartbtns, styles.joinusPartbtnsjsh, tab === 'it' ? styles.active : null)} to={`${commonPath}?tab=it`} onClick={this.onChangeTab.bind(this, 'it')}><span>技术部</span></Link>
            <Link className={classNames(styles.joinusPartbtns, styles.joinusPartbtnsyy, tab === 'yy' ? styles.active : null)} to={`${commonPath}?tab=yy`} onClick={this.onChangeTab.bind(this, 'yy')}><span>运营部</span></Link>
            <Link className={classNames(styles.joinusPartbtns, styles.joinusPartbtnschp, tab === 'chp' ? styles.active : null)} to={`${commonPath}?tab=chp`} onClick={this.onChangeTab.bind(this, 'chp')}><span>产品部</span></Link>
            <Link className={classNames(styles.joinusPartbtns, styles.joinusPartbtnsshch, tab === 'shch' ? styles.active : null)} to={`${commonPath}?tab=shch`} onClick={this.onChangeTab.bind(this, 'shch')}><span>市场部</span></Link>
            <Link className={classNames(styles.joinusPartbtns, styles.joinusPartbtnszh, tab === 'zh' ? styles.active : null)} to={`${commonPath}?tab=zh`} onClick={this.onChangeTab.bind(this, 'zh')}><span>综合部</span></Link>
          </div>
        </li>
        <div className="joinus-mainbox">
          {children}
        </div>
      </ul>
    );
  }
}

export default JoinusPage;
