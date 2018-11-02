import React, { PureComponent } from 'react';
import { Alert, Form, Input, Button } from 'antd';

import styles from './PassWord.less';

const FormItem = Form.Item;

@Form.create()
class PassWordPage extends PureComponent {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.passwordBox}>
        <Alert message="为保证资金安全，建议设置保密性强的密码！" type="warning" showIcon />
        <Form hideRequiredMark>
          <Form.Item label="旧密码">
            {getFieldDecorator('oldPassWord', {
              rules: [{ required: true, message: '请输入旧密码' }],
            })(<Input type="password" placeholder="请输入旧密码" />)}
          </Form.Item>
          <Form.Item label="新密码">
            {getFieldDecorator('passWord', {
              rules: [{ required: true, message: '请输入新密码' }],
            })(<Input type="password" placeholder="请输入新密码" />)}
          </Form.Item>
          <Form.Item label="确认密码">
            {getFieldDecorator('repassWord', {
              rules: [{ required: true, message: '请输入确认密码' }],
            })(<Input type="password" placeholder="请输入确认密码" />)}
          </Form.Item>
        </Form>
        <Button onClick={() => { }} type="primary">确认修改</Button>
      </div>
    );
  }
}

export default PassWordPage;