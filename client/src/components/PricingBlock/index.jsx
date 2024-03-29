import React from 'react';
import PriceBlock from './PriceBlock';
import styles from './PricingBlock.module.scss';

const PricingBlock = (props) => {
  const { data } = props;
  return (
    <section className={styles.container}>
      {data.map((elem) => (
        <PriceBlock key={elem.id} info={elem} />
      ))}
    </section>
  );
};

export default PricingBlock;
