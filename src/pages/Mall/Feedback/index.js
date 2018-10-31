import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, DatePicker, Select, Button, Card, InputNumber, Radio, Icon, Tooltip, Row, Col, Divider } from 'antd';

import { GlobalFooter, GlobalOther } from '@/components/Mall/GlobalFooter';
import GlobalDesc from '@/components/Mall/GlobalDesc';
import GlobalCourse from '@/components/Mall/GlobalCourse';
import styles from './index.less';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

const links = [{
  key: 'job',
  title: '人才招聘',
  href: '/job',
}, {
  key: 'about',
  title: '关于我们',
  href: '/about',
}, {
  key: 'contact',
  title: '联系我们',
  href: '/contact',
}, {
  key: 'help',
  title: '帮助中心',
  href: '/help',
}, {
  key: 'business',
  title: '商务合作',
  href: '/business',
}, {
  key: 'partner',
  title: '广告服务',
  href: '/partner',
}, {
  key: 'links',
  title: '友情链接',
  href: '/links',
},]

@Form.create()
class FeedbackPage extends PureComponent {
  render() {

    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 7 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 12 },
    //     md: { span: 10 },
    //   },
    // };
    const formItemLayout = null;
    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };


    return (
      <div className={styles.feedbackPage}>
        <div className={styles.feedbackMainBox}>
          <div className={styles.feedbackform}>
            <h3 className={styles.feedbackTitle}>新版保鲜期意见反馈</h3>
            <div className={styles.feedbackBox}>
              <p className={styles.feedbackWelcome}>亲爱的用户：</p>
              <p className={styles.feedbackNotice}>为了提升您在“新版保鲜期”的体验，请回答以下问题。</p>
              <Divider dashed/>
              <Form hideRequiredMark layout="vertical" className={styles.feedbackformbox}>
                <FormItem
                  {...formItemLayout}
                  label="1. 您对“新版保鲜期”页面设计的满意度？（必选）"
                >
                  {getFieldDecorator('radio-groupa',{
                    initialValue:'a'
                  })(
                    <RadioGroup>
                      <Radio value="a">非常满意</Radio>
                      <Radio value="b">满意</Radio>
                      <Radio value="c">一般</Radio>
                      <Radio value="d">不满意</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="2. 您对“新版保鲜期”功能的满意度？（必选）"
                >
                  {getFieldDecorator('radio-groupb',{
                    initialValue:'a'
                  })(
                    <RadioGroup>
                      <Radio value="a">非常满意</Radio>
                      <Radio value="b">满意</Radio>
                      <Radio value="c">一般</Radio>
                      <Radio value="d">不满意</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="3. 您对“新版保鲜期”总体的满意度？（必选）"
                >
                  {getFieldDecorator('radio-groupc',{
                    initialValue:'a'
                  })(
                    <RadioGroup>
                      <Radio value="a">非常满意</Radio>
                      <Radio value="b">满意</Radio>
                      <Radio value="c">一般</Radio>
                      <Radio value="d">不满意</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="4. 请留下您对“新版保鲜期”的意见和建议："
                >
                  {getFieldDecorator('feedback')(
                    <TextArea
                      style={{ minHeight: 32,resize:'none' }}
                      rows={6}
                      resize="none"
                    />
                  )}
                </FormItem>
                <Divider dashed/>
                <FormItem style={{ marginTop: 32 }}>
                  <Button type="primary" htmlType="submit" className={styles.feedbackSubmit}>
                    提交
                  </Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
        <div className={styles.footerbox}>
          <GlobalDesc />
          <Divider />
          <GlobalCourse />
          <Divider />
          <Row gutter={24}>
            <Col lg={12}>
              <GlobalFooter
                className={styles.textLeft}
                links={links}
                copyright={
                  <Fragment>
                    Copyright <Icon type="copyright" /> 2018-2020 <a href="https://www.baoyatao.com">baiyatao.com</a> 湘ICP备12008186号-1
                </Fragment>
                }
              />
            </Col>
            <Col lg={12}>
              <GlobalOther />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


// <div class="feedbackform">
//   <p class="feedbacktitle"></p>
//   <div class="feedback-box">
//     <p class="feedback-welcome">亲爱的用户：</p>
//     <p class="feedback-notice">为了提升您在“新版保鲜期”的体验，请回答以下问题。</p>
//     <ul class="user-choooselist">
//       <li>
//         <p>1. 您对“新版保鲜期”页面设计的满意度？（必选）</p>
//         <div class="user-choosebox">
//           <input type="radio" name="a" checked="checked">
//             <input type="radio" name="a">
//               <input type="radio" name="a">
//                 <input type="radio" name="a">
//                   <span class="feedback-radiobtn">非常满意</span>
//                   <span class="feedback-radiobtn">满意</span>
//                   <span class="feedback-radiobtn">一般</span>
//                   <span class="feedback-radiobtn active">不满意</span>
// 								</div>
// 							</li>
//               <li>
//                 <p>2. 您对“新版保鲜期”功能的满意度？（必选）</p>
//                 <div class="user-choosebox">
//                   <input type="radio" name="b" checked="checked">
//                     <input type="radio" name="b">
//                       <input type="radio" name="b">
//                         <input type="radio" name="b">
//                           <span class="feedback-radiobtn">非常满意</span>
//                           <span class="feedback-radiobtn">满意</span>
//                           <span class="feedback-radiobtn active">一般</span>
//                           <span class="feedback-radiobtn">不满意</span>
// 								</div>
// 							</li>
//                       <li>
//                         <p>3. 您对“新版保鲜期”总体的满意度？（必选）</p>
//                         <div class="user-choosebox">
//                           <input type="radio" name="c" checked="checked">
//                             <input type="radio" name="c">
//                               <input type="radio" name="c">
//                                 <input type="radio" name="c">
//                                   <span class="feedback-radiobtn active">非常满意</span>
//                                   <span class="feedback-radiobtn">满意</span>
//                                   <span class="feedback-radiobtn">一般</span>
//                                   <span class="feedback-radiobtn">不满意</span>
// 								</div>
// 							</li>
//                               <li>
//                                 <p>4. 请留下您对“新版保鲜期”的意见和建议：</p>
//                                 <div class="user-choosebox">
//                                   <textarea class="feedback-textarea"></textarea>
//                                 </div>

//                               </li>
// 						</ul>
//                             <a class="feedback-submit" href="javascript:;">提交</a>
// 					</div>
//                         </div>
export default FeedbackPage;
