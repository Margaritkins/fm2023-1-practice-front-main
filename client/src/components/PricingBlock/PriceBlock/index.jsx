import React from 'react';

import styles from './PriceBlock.module.scss';
import CONSTANTS from '../../../constants';
const { COLORS_PRICE } = CONSTANTS;

const PriceBlock = (props) => {
  const {
    info: {
      title,
      subTitle,
      price: { currency, ammount },
      description,
    },
  } = props;
  return (
    <article
      className={styles.block}
      style={{ borderColor: COLORS_PRICE[title] }}
    >
      <div>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <h3>
          {currency}
          {ammount}
        </h3>
        {description.map((elem, i) => {
          if (typeof elem === 'string') {
            return <p key={i}>{elem}</p>;
          }
          return (
            <ul key={i}>
              <li>
                <p>{elem.content}</p>
                <em>{elem.hint}</em>
                {elem.items && (
                <ul>
                  {elem.items.map((item,i) => (
                  <li>
                  <p>{item.content}</p>
                <em>{item.hint}</em>
                </li>
                ))}
                </ul>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </article>
  );
};

export default PriceBlock;
