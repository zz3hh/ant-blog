import React, { Component, PureComponent, Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Drawer, Col, Row, Checkbox, DatePicker, Table, Input, Upload, Divider, Select, Button, Alert } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import cityData from '@/utils/city';
import GeographicView from '@/components/Mall/Geographic';
import styles from './Address.less';
import { supportsGoWithoutReloadUsingHash } from 'history/DOMUtils';

// 已保存9了条地址，还能保存11条地址
const HeaderAlert = ({ count, onNewAddress }) => {
  return (
    <Alert
      message={
        <Fragment>
          已保存了 <a style={{ fontWeight: 600 }}>{count}</a> 条地址，&nbsp;&nbsp;
          还能保存 <span style={{ fontWeight: 600 }}>
            {20 - (count || 0)}
          </span> 条地址
          <a onClick={() => onNewAddress()} style={{ marginLeft: 24 }}>
            新增地址
      </a>
        </Fragment>
      }
      type="info"
      showIcon
    />
  );
}

const validatorGeographic = (rule, value, callback) => {
  const { provinceId, cityId, districtId, noDistrictList } = value;
  if (!value.provinceId) {
    return callback('Please input your area!');
  }
  if (!provinceId.key) {
    return callback('Please input your province!');
  }
  if (!cityId.key) {
    return callback('Please input your city!');
  }
  if (!noDistrictList && !districtId.key) {
    return callback('Please input your district!');
  }
  return callback();
};

@Form.create()
class DrawerForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: {},
    }
  }

  onClose = () => {
    const { onCloseDrawer, form } = this.props;
    form.resetFields();
    onCloseDrawer();
  }

  getShowDetail = () => {
    let result = {};
    const { detail } = this.props
    if (!_.isEmpty(detail)) {
      result = _.extend({}, detail, {
        area: this.getCityInfo(detail)
      });
    }
    return result;
  }

  getCityInfo = ({ provinceId, cityId, districtId }) => {
    let cityList = [];
    let districtList = [];
    let provinceName = '', cityName = '', districtName = '';
    if (!provinceId) {
      return {
        provinceId: { key: '', label: '' },
        cityId: { key: '', label: '' },
        districtId: { key: '', label: '' }
      }
    }
    if (provinceId) {
      cityList = _.find(cityData, city => city.id === provinceId);
      provinceName = cityList.name || '';
    }

    if (cityId) {
      districtList = _.find(cityList.cityList, city => city.id === cityId);
      cityName = districtList.name || '';
    }
    if (districtList && districtList.districtList.length) {
      const districtInfo = _.find(districtList.districtList, district => district.id == districtId);
      districtName = districtInfo.name || ''
    }
    return {
      provinceId: { key: provinceId, label: provinceName },
      cityId: { key: cityId, label: cityName },
      districtId: { key: districtId, label: districtName },
      noDistrictList: !districtId
    };
  }
  render() {

    const { drawerVisible, form, title, handleSave } = this.props;
    const showDetail = this.getShowDetail();
    const oKHandle = () => {
      form.validateFields((err, fieldValue) => {
        if (err) return;
        handleSave(_.extend({}, { ...showDetail }, { ...fieldValue }), form);
      });
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          title={title || '新增收货地址'}
          width={720}
          placement="right"
          maskClosable={false}
          onClose={this.onClose}
          visible={drawerVisible}
          style={{
            height: 'calc(100% - 55px)',
            overflow: 'auto',
            paddingBottom: 53,
          }}
        >
          <Form layout="vertical">
            <Form.Item label="收货人姓名">
              {getFieldDecorator('linkMan', {
                initialValue: showDetail.linkMan,
                rules: [{ required: true, message: 'please enter user name' }],
              })(<Input placeholder="请输入收货人姓名" />)}
            </Form.Item>
            <Form.Item label="手机号码">
              {getFieldDecorator('mobile', {
                initialValue: showDetail.mobile,
                rules: [{ required: true, message: 'please enter url' }],
              })(
                <Input placeholder="请输入手机号码" />
              )}
            </Form.Item>
            <Form.Item label="选择地区">
              {getFieldDecorator('area', {
                initialValue: showDetail.area,
                rules: [{ required: true, message: 'Please select an area' }, {
                  validator: validatorGeographic,
                },],
              })(<GeographicView />)}
            </Form.Item>
            <Form.Item label="详细地址">
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please choose the type' }],
                initialValue: showDetail.address,
              })(
                <Input.TextArea rows={2} style={{ resize: "none" }} placeholder="请输入详细地址" />
              )}
            </Form.Item>
            <Form.Item label="邮政编码">
              {getFieldDecorator('postalcode', {
                rules: [{ required: true, message: 'Please choose the approver' }],
                initialValue: showDetail.postalcode
              })(
                <Input placeholder="请输入邮政编码" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('isDefault', {
                valuePropName: 'checked',
                initialValue: showDetail.isDefault
              })(
                <Checkbox>设置为默认收货地址</Checkbox>
              )}
            </Form.Item>
          </Form>
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              取消
            </Button>
            <Button onClick={oKHandle} type="primary">保存</Button>
          </div>
        </Drawer>
      </div>
    )
  }
};

/* eslint react/no-multi-comp:0 */
@connect(({ address }) => ({
  ...address
}))
@Form.create()
class AddressPage extends Component {
  state = {
    drawerVisible: false,
    drawerTitle: '',
    adsDetail: {},
  }

  componentDidMount() {
    this.loadList();
  }

  loadList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'address/fetch',
      payload: {
        count: 8,
      },
    });
  }

  editAddress(record) {
    this.setState({
      adsDetail: record,
      drawerVisible: true,
      drawerTitle: '修改收货地址信息',
    });
  }

  handleSave = (values, form) => {
    const saveValues = _.extend({}, values, this.getCityInfo(values));
    const { dispatch } = this.props;
    const that = this;
    if (!saveValues._id) {
      dispatch({
        type: 'address/addAddress',
        payload: saveValues,
      }).then(() => {
        form.resetFields();
        that.setState({
          drawerVisible: false
        });
        that.loadList();
      });
    } else {
      dispatch({
        type: 'address/updateAddress',
        payload: saveValues,
      }).then(() => {
        form.resetFields();
        that.setState({
          drawerVisible: false
        });
        that.loadList();
      });
    }

  }

  getCityInfo = ({ area, address }) => {
    return {
      provinceId: area.provinceId.key,
      cityId: area.cityId.key,
      districtId: area.districtId.key === '0' ? null : area.districtId.key,
      addressDesc: `${area.provinceId.label || ''}${area.cityId.label || ''}${area.districtId.label === '请选择' ? '' : area.districtId.label}${address}`,
    }
  };

  rmAddress(record) {
    const { dispatch } = this.props;
    const that = this;
    dispatch({
      type: 'address/removeAddress',
      payload: { _id: record._id },
    }).then(() => {
      that.loadList();
    });
  }

  setDefault(record) {
    const { dispatch } = this.props;
    const that = this;
    dispatch({
      type: 'address/setDefault',
      payload: { _id: record._id },
    }).then(() => {
      that.loadList();
    });
  }

  onCloseDrawer = () => {
    this.setState({
      drawerVisible: false,
    });
  }

  onNewAddress = () => {
    this.setState({
      drawerVisible: true,
      adsDetail: {},
      drawerTitle: '新增收货地址信息',
    });
  }

  columns = [{
    title: '收货人',
    dataIndex: 'linkMan',
    key: 'linkMan',
  }, {
    title: '电话/手机',
    dataIndex: 'mobile',
    key: 'mobile',
  }, {
    title: '收件地址',
    dataIndex: 'addressDesc',
    key: 'addressDesc',
  }, {
    title: '邮编',
    dataIndex: 'postalcode',
    key: 'postalcode',
  }, {
    title: "操作",
    key: "actions",
    render: (text, record) => (
      <span>
        <a href="javascript:;" onClick={() => this.editAddress(record)}>修改</a>
        <Divider type="vertical" />
        <a href="javascript:;" onClick={() => this.rmAddress(record)}>删除</a>
      </span>
    ),
  }, {
    title: '',
    key: "set",
    render: (text, record) => {
      if (record.isDefault) {
        return (
          <span className={styles.defaultAddress}>默认地址</span>
        );
      }
      return (
        <a onClick={() => this.setDefault(record)} href="javascript:;">设为默认</a>
      );
    },
  }]

  render() {
    const { addressList, form } = this.props;
    const { drawerVisible, adsDetail, drawerTitle } = this.state;
    return (
      <div className={styles.addressBox}>
        <div className={styles.addressTopBox}>
          <HeaderAlert count={addressList.length} onNewAddress={this.onNewAddress} />
        </div>
        <Table columns={this.columns} rowKey={record => record._id} bordered dataSource={addressList} pagination={false} />
        <DrawerForm title={drawerTitle} detail={adsDetail} drawerVisible={drawerVisible} handleSave={(values, form) => { this.handleSave(values, form) }} onCloseDrawer={this.onCloseDrawer} />
      </div>
    )
  }
}

export default AddressPage;
