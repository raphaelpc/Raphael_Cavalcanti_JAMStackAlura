import React from 'react';
import FooterContainer from '../styles/components/Footer';
import Text from './foundation/Text';

export default function Footer() {
  return (
    <FooterContainer>
      <Text tag="span">
        Made with ♥ in ReactJS, NextJS and Styled Components.
      </Text>
    </FooterContainer>
  );
}
