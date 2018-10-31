import React from 'react';
import classNames from 'classnames';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import { Row, Col, Divider } from 'antd';
import styles from './index.less';

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.ftlinkbox, className);
  return (
    <footer className={clsString}>
      {links && (
        <div className={styles.links}>
          {links.map((link, index) => (
            <div className={styles.linkItem} key={`linkitem-${index}`}>
              <Link
                key={`links-${index}`}
                title={link.key}
                target={link.blankTarget ? '_blank' : '_self'}
                to={link.href}
              >
                {link.title}
              </Link>
              {index!=links.length-1 && <Divider key={`divider-${index}`} className={styles.divider} type="vertical" />}
            </div>
          ))}

        </div>
      )}
      {copyright && <div className={styles.copyright}>{copyright}</div>}
    </footer>
  );
};

const GlobalOther = ({ className }) => {
  const clsString = classNames(styles.ontherinfo, className);
  return (
    <div className={clsString}>
      <a href="javascript:;" className={classNames(styles.ftendlinks,styles.ftendlinksa,styles.firstchild)}></a>
      <a href="javascript:;" className={classNames(styles.ftendlinks,styles.ftendlinksb)}></a>
      <a href="javascript:;" className={classNames(styles.ftendlinks,styles.ftendlinksc)}></a>
      <a href="javascript:;" className={classNames(styles.ftendlinks,styles.ftendlinksd)}></a>
    </div>
  );
};

export default GlobalFooter;

export { GlobalFooter, GlobalOther };
