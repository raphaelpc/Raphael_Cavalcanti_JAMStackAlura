import React from 'react';
import CoverContainer, { About, CoverBox, Networks } from '../styles/components/Cover';
import GitHub from '../styles/img/GitHub';
import LinkedIn from '../styles/img/LinkedIn';
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
          <Text tag="span">Bachelor in Computer Science. Full stack developer.</Text>
          <Text tag="span">Front-end: NextJs, ReactJs, Typescript, JavaScript e JSP/JSF.</Text>
          <Text tag="span">Back-end: Java.</Text>
        </About>

        <Networks>
          <GitHub />
          <LinkedIn />
        </Networks>
      </CoverBox>
    </CoverContainer>
  );
}
