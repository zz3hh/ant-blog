import React, { Component, Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { List } from 'antd';

import styles from './Safety.less';
const passwordStrength = {
  strong: (
    <font className="strong">
      <FormattedMessage id="app.settings.security.strong" defaultMessage="Strong" />
    </font>
  ),
  medium: (
    <font className="medium">
      <FormattedMessage id="app.settings.security.medium" defaultMessage="Medium" />
    </font>
  ),
  weak: (
    <font className="weak">
      <FormattedMessage id="app.settings.security.weak" defaultMessage="Weak" />
    </font>
  ),
}


class SafetyPage extends Component {
  getData = () => [
    {
      title: formatMessage({ id: "app.settings.security.password" }, {}),
      description: (
        <Fragment>
          {formatMessage({ id: "app.settings.security.password-description" })}
          {passwordStrength.strong}
        </Fragment>
      ),
      actions: [
        <a>
          <FormattedMessage id="app.settings.security.modify" defaultMessage="Modify" />
        </a>
      ]
    },
    this.getQuestionStatus(),
    this.getPhoneStatus(),
    this.getEmailStatus(),
    this.getAlipayStatus(),
    this.getWeixinStatus(),
  ]
  getPhoneStatus = () => {
    return {
      title: "绑定手机",
      description: "绑定手机后，可免费升级更高级别的安全服务，有效保障您的帐户和资金安全！",
      actions: [<a>绑定</a>]
    }
  }

  getEmailStatus = () => {
    return {
      title: "绑定邮箱",
      description: "忘记密码时，此邮箱可以帮你找回密码。",
      actions: [<a>绑定</a>]
    }
  }

  getAlipayStatus = () => {
    return {
      title: "绑定支付宝",
      description: "绑定支付宝帐号后，可将元宝转到支付宝当钱用！",
      actions: [<a>绑定</a>]
    }
  }

  getWeixinStatus = () => {
    return {
      title: "关联公众号",
      description: "关联公众号后可以直接修改密码，并用于微信提现用",
      actions: [<a>绑定</a>]
    }
  }

  getQuestionStatus = () => {
    return {
      title: '密保问题',
      description: '未设置密保问题，密保问题可有效保护账户安全',
      actions: [
        <a>设置</a>
      ],
    };
  }

  render() {

    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default SafetyPage;
