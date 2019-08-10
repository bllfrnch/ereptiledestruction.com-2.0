import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import fbLogo from '../../images/FB-f-Logo__blue_29.png';
import styles from './nav.module.scss';

const Nav = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            sections {
              id
              label
            }
          }
        }
      }
    `
  );

  return (
    <nav className={styles.nav}>
      <ul>
        {site.siteMetadata.sections.map(module => (
          <li className={styles.navItem}>
            <Link to={`#${module.id}`}>{module.label}</Link>
          </li>
        ))}
        <li className={styles.fbNavItem}>
          <a
            href="https://www.facebook.com/ereptiledestruction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fbLogo} alt="Facebook" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
