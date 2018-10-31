import React, { Component } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, Select, Button, Row, Col, Upload, Icon, Modal, Tooltip, Tag ,Divider} from 'antd';
import wangEditor from 'wangeditor'

import styles from './PostView.less';


const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
    md: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 21 },
    md: { span: 20 },
  },
};

const formSmallItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
    md: { span: 4 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 21 },
    md: { span: 20 },
    lg: { span: 16 },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 3 },
    sm: { span: 10, offset: 4 },
  },
};

const cateList = [
  { key: 'ask', value: '提问' },
  { key: 'share', value: '分享' },
  { key: 'discuss', value: '讨论' },
  { key: 'suggest', value: '建议' },
  { key: 'notice', value: '公告' },
  { key: 'news', value: '动态' },
  { key: 'job', value: '招聘' },
];

@Form.create()
class PostViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: '',
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      tags: ['私人秘密', '饲养经验', '教育经验'],
      inputVisible: false,
      inputValue: '',
    }
  }


  componentDidMount() {
    const elem = this.refs.editorElem;
    const editor = new wangEditor(elem);
    this.editor = editor;
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.uploadImgServer = '/upload';  // 上传图片到服务器
    editor.customConfig.zIndex = 2;
    editor.customConfig.colors = [
      '#000000',
      '#eeece0',
      '#1c487f',
      '#4d80bf',
      '#c24f4a',
      '#8baa4a',
      '#7b5ba1',
      '#46acc8',
      '#f9963b',
      '#ffffff'
    ];

    // editor.customConfig.emotions = [{
    //   title: '默认',
    //   // type -> 'emoji' / 'image'
    //   type: 'image',
    //   // content -> 数组
    //   content: [
    //     {
    //       alt: '[坏笑]',
    //       src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/89/hufen_thumb.gif'
    //     },
    //     {
    //       alt: '[舔屏]',
    //       src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
    //     }
    //   ]
    // }, {
    //   // tab 的标题
    //   title: 'emoji',
    //   // type -> 'emoji' / 'image'
    //   type: 'emoji',
    //   // content -> 数组
    //   content: ['😀', '😃', '😄', '😁', '😆']
    // }];
    // editor.customConfig.emotions = [];
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    editor.create()
  }

  clickHandle = () => {
    // wangEditor.fullscreen.init(this.refs.editorElem);
    console.log(this.state.editorContent);
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const { previewVisible, previewImage, fileList } = this.state;
    const { tags, inputVisible, inputValue } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className={styles.postview}>
        <Form hideRequiredMark layout="horizontal">
          <FormItem
            label="文章标题"
            {...formItemLayout}
          >
            {getFieldDecorator('title')(
              <Input type="input" placeholder="请输入文章标题" />
            )}
          </FormItem>
          <Row gutter={24}>
            <Col lg={12}>
              <FormItem
                label="文章类型"
                {...formSmallItemLayout}
              >
                {getFieldDecorator('types')(
                  <Select type="input" placeholder="请选择">
                    <Option value="1">原创</Option>
                    <Option value="2">转载</Option>
                    <Option value="3">分享</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col lg={12}>
              <FormItem
                label="文章分类"
                {...formSmallItemLayout}
              >
                {getFieldDecorator('cate')(
                  <Select type="input" placeholder="请选择">
                    {cateList.map(item => (
                      <Option key={item.key} value={item.key}>{item.value}</Option>
                    ))}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem
            label="缩略图"
            {...formItemLayout}
          >
            <div className="clearfix">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          </FormItem>
          <FormItem
            label="简述"
            {...formItemLayout}
          >
            {getFieldDecorator('feedback')(
              <TextArea
                style={{ minHeight: 32, resize: 'none' }}
                rows={6}
                resize="none"
              />
            )}
          </FormItem>
          <FormItem>
            <div ref="editorElem" style={{ textAlign: 'left' }}></div>
          </FormItem>
          <FormItem
            label="文章标签"
            {...formItemLayout}
          >
            {tags.map((tag, index) => {
              const isLongTag = tag.length > 20;
              const tagElem = (
                <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
              );
              return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
            })}
            {inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag
                onClick={this.showInput}
                color="#108ee9"
              >
                <Icon type="plus" /> 添加新标签
            </Tag>
            )}
          </FormItem>
          <Divider dashed/>
          <FormItem
            {...submitFormLayout}
            style={{ marginTop: 32 }}
          >
            <Button type="primary">发布文章</Button>
            <Button>存为草稿</Button>
            <Button type="dashed">返回</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default PostViewPage;