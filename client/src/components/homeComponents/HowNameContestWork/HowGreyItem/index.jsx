import React from 'react';
import CONSTANTS from '../../../../constants'
import styles from './HowGrayItem.module.scss'

const HowGrayItem = (props) => {
  const {item:{title, description, content, text, src, alt}}=props
  return (
    <div className={styles.greyContainer}>
      <div className={styles.stepReverse}>
        <div>
          <h3>{title}</h3>
          <p>
            <i className="fas fa-check" />
            <span>{description}</span>
          </p>
          <p>
            <i className="fas fa-check" />
            <span>
              {content}
            </span>
          </p>
          <p>
            <i className="fas fa-check" />
            <span>
              {text}
            </span>
          </p>
        </div>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}${src}`}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default HowGrayItem;
