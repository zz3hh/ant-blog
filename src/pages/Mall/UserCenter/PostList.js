import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import moment from 'moment';
import router from 'umi/router';
import { Card, List, Tag, Row, Col, Icon, Avatar, Divider, Spin, Input } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './PostList.less';

moment.locale("zh-cn");

const imgUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';


const ArticleListContent = ({ data: { content, updatedAt, avatar, owner, href } }) => (
  <div className={styles.listContent}>
    <div className={styles.extra}>
      <Avatar src={avatar} size="small" />
      <a href={href}>{owner}</a>
      <em>{moment(updatedAt).fromNow()}</em>
    </div>
    <div className={styles.ItemBox}>
      {/* <div className={styles.ItemImgBox}>
        <img className={styles.ItemImg} src={imgUrl} />
      </div> */}
      <div className={styles.description}>{content}</div>
    </div>
  </div>
);

@connect(({ loading, user, list, project }) => ({
  listLoading: loading.effects['list/fetch'],
  project,
  list,
  projectLoading: loading.effects['project/fetchNotice'],
}))
class PostListPage extends PureComponent {
  state = {

  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const { projectLoading, project, list } = this.props;
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    if (projectLoading) {
      return <Spin />
    }
    return (
      <List
        size="large"
        className={styles.articleList}
        rowKey="id"
        itemLayout="vertical"
        dataSource={list.list}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="star-o" text={item.star} />,
              <IconText type="like-o" text={item.like} />,
              <IconText type="message" text={item.message} />,
            ]}
          >
            <List.Item.Meta
              title={
                <a className={styles.listItemMetaTitle} href={item.href}>
                  {item.title}
                </a>
              }
              description=""
            />
            <ArticleListContent data={item} />
            <div className={styles.tagbox}>
              <Tag>Ant Design</Tag>
              <Tag>设计语言</Tag>
              <Tag>蚂蚁金服</Tag>
            </div>
          </List.Item>
        )}
      ></List>
    );
  }
}

export default PostListPage;