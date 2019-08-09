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

  return (
    <Layout>
      <SEO title="Home" />
      {site.siteMetadata.sections.map(section => (  
        <Section data={section} />
      ))}
    </Layout>
  );
};

export default IndexPage;
