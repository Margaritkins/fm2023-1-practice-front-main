import React, { useState } from 'react';
import Block from './Block';

import styles from './BlockGroup.module.scss';

const BlocksGroup = (props) => {
  const {idSelectedItem, content } = props;
  const [idSelectItem, setIdSelectItem] = useState(Number(idSelectedItem));
  const setSelect = (id) => setIdSelectItem(id);
  const renderBlock = content.map((block) => (
    <Block
      key={block.id}
      item={block}
      setSelect={setSelect}
      isSelected={block.id === idSelectItem}
    />
  ));
  return <div className={styles.blockGroupe} >{renderBlock}</div>;
};

export default BlocksGroup;
