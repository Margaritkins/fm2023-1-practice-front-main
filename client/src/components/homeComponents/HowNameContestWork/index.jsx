import React from 'react';

import styles from './HowNameContestWork.module.scss';
import dataWhiteContainer from './dataWhiteContainer.json';
import dataGreenContainer from './dataGreenContainer.json';
import dataGrayContainer from './dataGrayContainer.json';

import HowWhiteItem from './HowWhiteItem';
import HowGreenItem from './HowGreenItem';
import HowGrayItem from './HowGreyItem';

const HowNameContestWork = () => {
  const renderWhite = (item, i) => <HowWhiteItem key={i} item={item} />;
  const renderGreen = (item, i) => <HowGreenItem key={i} item={item} />;
  const renderGray = (item,i)=><HowGrayItem key={i} item={item} />
  return (
    <>
      <div className={styles.whiteContainer}>
        {dataWhiteContainer.map(renderWhite)}
      </div>
      <div className={styles.greenContainer}>
        {dataGreenContainer.map(renderGreen)}
      </div>
        {dataGrayContainer.map(renderGray)}

    </>
  );
};

export default HowNameContestWork;
