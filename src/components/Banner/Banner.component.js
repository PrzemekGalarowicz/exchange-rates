import React from 'react';
import PropTypes from 'prop-types';
import { Section, Heading } from 'react-bulma-components';

const Banner = ({ title, subtitle }) => (
  <Section>
    <Heading>{title}</Heading>
    {subtitle && <Heading subtitle>{subtitle}</Heading>}
  </Section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default Banner;
