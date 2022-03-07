import React from 'react';
import { Link } from 'gatsby';

import Menu from './Menu';

import * as css from './TopBar.module.css';

import Logo from '../images/logo.svg';

const TopBar = () => {
  return (
    <div className={css.outer}>
      <div className={css.root}>
        <div className={css.logo}>
          <Link to="/">
            <Logo width={250} />
          </Link>
        </div>
        <div className={css.clock}>🕛</div>
        <div className={css.date}>
          <span className={css.longDate}>Sunday / Feb 7th, 2021</span>
          <span className={css.shortDate}>09/07/2021</span>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;