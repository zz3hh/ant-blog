import React, { PureComponent } from 'react';
import styles from './Maintain.less';

class MainTainPage extends PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className={styles.maintainbox}>
        <div className={styles.maintain}>
          <img className={styles.nofindimg} src={require('@/assets/images/maintain.png')}/>
        </div>
      </div>
    );
  }
}


export default MainTainPage;