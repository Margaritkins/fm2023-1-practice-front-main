import React from 'react';
import styles from './HeaderNavMenu.module.scss';

import CONSTANTS from '../../../constants';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const HeaderNavMenu = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <span>NAME IDEAS</span>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul>
            <li>
              <a href="/">BEAUTY</a>
            </li>
            <li>
              <a href="/">CONSULTING</a>
            </li>
            <li>
              <a href="/">E-COMMERCE</a>
            </li>
            <li>
              <a href="/">FASHION & CLOTHING</a>
            </li>
            <li>
              <a href="/">FINANCE</a>
            </li>
            <li>
              <a href="/">REAL ESTATE</a>
            </li>
            <li>
              <a href="/">TECH</a>
            </li>
            <li className={styles.last}>
              <a href="/">MORE CATEGORIES</a>
            </li>
          </ul>
        </li>
        <li>
          <span>CONTESTS</span>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul>
            <li>
              <a href="/">HOW IT WORKS</a>
            </li>
            <li>
              <NavLink to="/pricing">PRICING</NavLink>
            </li>
            <li>
              <a href="/">AGENCY SERVICE</a>
            </li>
            <li>
              <a href="/">ACTIVE CONTESTS</a>
            </li>
            <li>
              <a href="/">WINNERS</a>
            </li>
            <li>
              <a href="/">LEADERBOARD</a>
            </li>
            <li className={styles.last}>
              <a href="/">BECOME A CREATIVE</a>
            </li>
          </ul>
        </li>
        <li>
          <span>OUR WORK</span>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul>
            <li>
              <a href="/">NAMES</a>
            </li>
            <li>
              <a href="/">TAGLINES</a>
            </li>
            <li>
              <a href="/">LOGOS</a>
            </li>
            <li className={styles.last}>
              <a href="/">TESTIMONIALS</a>
            </li>
          </ul>
        </li>
        <li>
          <span>NAMES FOR SALE</span>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul>
            <li>
              <a href="/">POPULAR NAMES</a>
            </li>
            <li>
              <a href="/">SHORT NAMES</a>
            </li>
            <li>
              <a href="/">INTRIGUING NAMES</a>
            </li>
            <li>
              <a href="/">NAMES BY CATEGORY</a>
            </li>
            <li>
              <a href="/">VISUAL NAME SEARCH</a>
            </li>
            <li className={styles.last}>
              <a href="/">SELL YOUR DOMAINS</a>
            </li>
          </ul>
        </li>
        <li>
          <span>BLOG</span>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
            alt="menu"
          />
          <ul>
            <li>
              <a href="/">ULTIMATE NAMING GUIDE</a>
            </li>
            <li>
              <a href="/">POETIC DEVICES IN BUSINESS NAMING</a>
            </li>
            <li>
              <a href="/">CROWDED BAR THEORY</a>
            </li>
            <li className={styles.last}>
              <a href="/">ALL ARTICLES</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavMenu;
