import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './section.module.scss';

const Section = (props) => {
  const { data } = props;
  const { headline, id } = data;
  return (
    <section id={id} className={styles.section}>
      <h2>{headline}</h2>
    </section>
  );
};

export default Section;