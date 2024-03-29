import React from 'react';
import cx from 'classnames';
import styles from './Block.module.scss';

const Block = (props) => {
  const {
    item: {id, title, content },
    isSelected,
    setSelect
  } = props;
  const block = cx(styles.block, { [styles.block__selected]: isSelected });
  const handleSelect=()=>{
    setSelect(id)
  }
  return (
    <div className={block} onClick={handleSelect}>
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
};

Block.defaultProps = {
  item: {
    title: 'Yes',
    content: 'The Domian schould exactly match the name',
  },
  isSelected: false,
};

export default Block;
