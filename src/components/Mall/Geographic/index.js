import React, { PureComponent } from 'react';
import { Select, Spin } from 'antd';
import _ from 'lodash';
import cityData from '@/utils/city';
import styles from './index.less';

const { Option } = Select;
const nullSelectItem = {
  label: '请选择',
  key: '0',
};

class Geographic extends PureComponent {
  state = {
    isLoading: false,
    provinceId: "",
    cityId: "",
    cityList: [],
    districtList: [],
    noDistrictList: false,
  }

  componentDidMount() {
    const { value, onChange } = this.props;
    let cityList = [];
    let districtList = [];

    if (value && value.provinceId && value.provinceId.key) {
      cityList = _.find(cityData, city => city.id === value.provinceId.key);
    }

    if (value && value.cityId && value.cityId.key) {
      districtList = _.find(cityList.cityList, city => city.id === value.cityId.key);
    }

    this.setState({
      cityList: cityList.cityList || [],
      provinceId: value && value.provinceId && value.provinceId.key || '',
      cityId: value && value.cityId && value.cityId.key,
      districtList: districtList && districtList.districtList || []
    });
  }
  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    let cityList = [];
    let districtList = [];
    if (value && value.provinceId && value.provinceId.key) {
      cityList = _.find(cityData, city => city.id === value.provinceId.key);
    }

    if (value && value.cityId && value.cityId.key) {
      districtList = _.find(cityList.cityList, city => city.id === value.cityId.key);
    }

    this.setState({
      cityList: cityList.cityList || [],
      provinceId: value && value.provinceId && value.provinceId.key || '',
      cityId: value && value.cityId && value.cityId.key,
      districtList: districtList && districtList.districtList || [],
    });
  }

  getProvinceOption() {
    let pinkArray = [];
    for (var i = 0; i < cityData.length; i++) {
      pinkArray.push({
        id: cityData[i].id,
        name: cityData[i].name
      });
    }
    return this.getOption(pinkArray);
  }

  getCityOption = () => {
    const { cityList } = this.state;
    return this.getOption(cityList || []);
  }

  getDistrictOption = () => {
    const { districtList } = this.state;
    return this.getOption(districtList || []);
  }

  getOption = list => {
    if (!list || list.length < 1) {
      return (
        <Option key={0} value={0}>
          没有找到选项
        </Option>
      );
    }
    return list.map(item => (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    ));
  }

  selectProvinceItem = item => {
    const { onChange } = this.props;
    const provinceId = item.key;

    if (provinceId != this.state.provinceId) {
      const cityList = _.find(cityData, city => city.id === provinceId);
      this.setState({
        cityList: cityList && cityList.cityList || [],
        districtList: [],
        provinceId: provinceId,
        noDistrictList: false,
      }, () => {
        onChange({
          provinceId: item,
          cityId: nullSelectItem,
          districtId: nullSelectItem,
          noDistrictList: false
        });
      });
    }
  }

  selectCityItem = item => {
    const { value, onChange } = this.props;
    const cityId = item.key;
    if (cityId != this.state.cityId) {
      const districtList = _.find(this.state.cityList, city => city.id === cityId);
      this.setState({
        districtList: districtList && districtList.districtList || [],
        noDistrictList: districtList.length == 0 || districtList.districtList.length == 0
      }, () => {
        onChange({
          provinceId: value.provinceId,
          cityId: item,
          districtId: nullSelectItem,
          noDistrictList: this.state.noDistrictList
        });
      });
    }


  }

  selectDistrictItem = item => {
    const { value, onChange } = this.props;
    onChange({
      provinceId: value.provinceId,
      cityId: value.cityId,
      districtId: item,
    });
  }

  conversionObject() {
    const { value } = this.props;
    if (!value) {
      return {
        provinceId: nullSelectItem,
        cityId: nullSelectItem,
        districtId: nullSelectItem,
      };
    }
    const { provinceId, cityId, districtId } = value;
    return {
      provinceId: provinceId || nullSelectItem,
      cityId: cityId || nullSelectItem,
      districtId: districtId || nullSelectItem,
    };
  }

  render() {
    const { provinceId, cityId, districtId } = this.conversionObject();
    const { isLoading, noDistrictList,districtList } = this.state;
    
    return (
      <Spin spinning={isLoading} wrapperClassName={styles.row}>
        <Select
          className={styles.item}
          value={provinceId}
          labelInValue
          showSearch
          onSelect={this.selectProvinceItem}
          placeholder="请选择"
        >
          {this.getProvinceOption()}
        </Select>
        <Select
          className={styles.item}
          value={cityId}
          labelInValue
          showSearch
          onSelect={this.selectCityItem}
          placeholder="请选择"
        >
          {this.getCityOption()}
        </Select>
        {districtList.length ==0 ? null : <Select
          className={styles.item}
          value={districtId}
          labelInValue
          showSearch
          onSelect={this.selectDistrictItem}
          placeholder="请选择"
        >
          {this.getDistrictOption()}
        </Select>
        }
      </Spin>
    );
  }
}

export default Geographic;
