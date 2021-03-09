import React from 'react';
import CoverContainer, { About, CoverBox } from '../styles/components/Cover';
import Avatar from './Avatar';
import Text from './foundation/Text';
import Menu from './Menu';

export default function Cover() {
  return (
    <CoverContainer>
      <Menu />

      <CoverBox>
        <Avatar />

        <Text
          tag="h1"
          color="secondary.main"
          fontSize={{
            xs: '2.2rem',
            sm: '3.5rem',
            lg: '4rem',
          }}
          fontWeight="bold"
        >
          Raphael Cavalcanti
        </Text>

        <About>
          <Text tag="span">Cientista da Computação e desenvolvedor Full-stack.</Text>
          <Text tag="span">Front-end: NextJs, ReactJs, Typescript, JavaScript e JSP/JSF.</Text>
          <Text tag="span">Back-end: Java.</Text>
        </About>
      </CoverBox>
    </CoverContainer>
  );
}
