import React from 'react';
import Head from 'next/head';
import HomeContainer from '../styles/pages/Home';
import Cover from '../components/Cover';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio de Raphael Pena Cavalcanti</title>
      </Head>

      <HomeContainer>
        <Cover />

        <Projects />
      </HomeContainer>
    </div>
  );
}
