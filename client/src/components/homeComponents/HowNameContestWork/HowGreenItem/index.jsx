import React from 'react';
import CONSTANTS from '../../../../constants';
import styles from './HowGreenItem.module.scss';

const HowGreenItem = (props) => {
  const {item:{title,description,content, src, alt}}=props
  return (
    <div className={styles.greenContainer}>
    <div className={styles.step}>
      <img
        src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`}
        alt={alt}
      />
      <div className={styles.greenStep}>
        <h3>{title}</h3>
        <p>
          <i className="fas fa-check" />
          <span>{description}</span>
        </p>
        <p>
          <i className="fas fa-check" />
          <span>{content}</span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default HowGreenItem;
