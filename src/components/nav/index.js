import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './nav.module.scss';

const Nav = (props) => {
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
          <li>
            <Link to={`#${module.id}`}>{module.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;