import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from '../nav';
import styles from './header.module.scss';
import ereptileLogo from '../../images/ed-logo.png';
import ereptileLogoMobile from '../../images/ed-logo-mobile.png';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1>
      <Link to="/">
        <picture>
          <source srcSet={ereptileLogo} media="(min-width: 601px)" alt="EREPTILE DESTRUCTION" aria-label="Ereptile Destruction" />
          <source srcSet={ereptileLogoMobile} media="(max-width: 600px)" alt="EREPTILE DESTRUCTION" aria-label="Ereptile Destruction" />
          <img src={ereptileLogo} alt="EREPTILE DESTRUCTION" aria-label="Ereptile Destruction" />
        </picture>
      </Link>
    </h1>
    <Nav />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
