import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';
import styles from './section.module.scss';

const Section = props => {
  const { data, children } = props;
  const { headline, id } = data;
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.sectionHeadline}>
        <span className={cx(styles.icon, styles[id])}>{headline}</span>
      </h2>
      <div className={styles.sectionContentWrapper}>{children}</div>
    </section>
  );
};

export default Section;
