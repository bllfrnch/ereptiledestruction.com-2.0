import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Section from '../components/section';
import SEO from '../components/seo';

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            sections {
              id
              headline
            }
          }
        }
      }
    `
  );

  const { siteMetadata } = site;
  const { sections } = siteMetadata;
  const sectionModules = {};

  sections.forEach(section => {
    const { id } = section;
    sectionModules[
      id
    ] = require(`../components/section-types/${section.id}`).default;
  });

  return (
    <Layout>
      <SEO title="Home" />
      {site.siteMetadata.sections.map(section => {
        const { id } = section;
        const Content = sectionModules[id];
        console.log(id, Content);

        return (
          <Section data={section}>
            <Content data={section} />
          </Section>
        );
      })}
    </Layout>
  );
};

export default IndexPage;
