import React from 'react';
import CONSTANTS from '../../../../constants'
import styles from './HowWhiteItem.module.scss'

const HowWhiteItem = (props) => {
  const {item:{title,description,content, src, alt}}=props
  return (
    <div className={styles.stepReverse}>
    <div>
      <h3>{title}</h3>
      <p>
        <i className="fas fa-check" />
        <span>
          {description}
        </span>
      </p>
      <p>
        <i className="fas fa-check" />
        <span>
          {content}
        </span>
      </p>
    </div>
    <img
      src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`}
      alt={alt}
    />
  </div>
  );
}

export default HowWhiteItem;
