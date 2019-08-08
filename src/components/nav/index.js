import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './nav.module.scss';

const Nav = (props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            modules {
              href
              label
            }
          }
        }
      }
    `
  );

  console.log('site: ', site);

  return (
    <nav className={styles.nav}>
      <ul>
        {site.siteMetadata.modules.map(module => (
          <li>
            <Link to={module.href}>{module.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;