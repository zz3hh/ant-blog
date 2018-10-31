import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { FormatMessage } from 'umi/locale';
import { Menu, Icon } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './BaseView.less';


const { Item, SubMenu } = Menu;


@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class BaseView extends Component {
  constructor(props) {
    super(props);
    const { match, location } = props;
    const menuMap = {
      basicinfo: "基本信息",
      address: "收货地址",
      orderlist: "我的订单"
    };

    const key = location.pathname.replace(`${match.path}/`, '');
    this.state = {
      mode: 'inline',
      menuMap,
      openKeys:["sub1"],
      selectKey: menuMap[key] ? key : 'basicinfo',
    }
  }

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  getmenu = () => {
    const { menuMap } = this.state;
    return Object.keys(menuMap).map(item => <Item key={item}>{menuMap[item]}</Item>);
  };

  getRightTitle = () => {
    const { selectKey, menuMap } = this.state;
    return menuMap[selectKey];
  };

  selectKey = ({ key }) => {
    router.push(`/account/settings/${key}`);
    this.setState({
      selectKey: key,
    });
  };

  onOpenChange = (openKeys) => {
    console.log(openKeys);
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    const { children, currentUser } = this.props;
    const { mode, selectKey,openKeys } = this.state;
    return (
      <GridContent>
        <div
          className={styles.main}
          ref={ref => {
            this.main = ref;
          }}
        >
          <div className={styles.leftmenu}>
            <Menu mode={mode} openKeys={openKeys} selectedKeys={[selectKey]} onOpenChange={this.onOpenChange}>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>我的账号</span></span>}>
                <Menu.Item key="basicinfo">基本信息</Menu.Item>
                <Menu.Item key="address">收货地址</Menu.Item>
                <Menu.Item key="3">提现设置</Menu.Item>
                <Menu.Item key="4">第三方绑定</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>我的社区</span></span>}>
                <Menu.Item key="5">我的订单</Menu.Item>
                <Menu.Item key="61">账户明细</Menu.Item>
                <Menu.Item key="62">我的收藏</Menu.Item>
                <Menu.Item key="63">我要兑换</Menu.Item>
                <Menu.Item key="64">消息中心</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>安全中心</span></span>}>
                <Menu.Item key="9">安全验证</Menu.Item>
                <Menu.Item key="10">修改密码</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.title}>{this.getRightTitle()}</div>
            {children}
          </div>
        </div>
      </GridContent>
    );
  }
}

export default BaseView;