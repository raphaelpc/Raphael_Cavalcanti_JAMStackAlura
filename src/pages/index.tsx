import React from 'react';
import Head from 'next/head';
import HomeContainer from '../styles/pages/Home';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import Section from '../components/Section';

const educationItems = [
  {
    title: 'CEFET MG',
    description: 'Técnico em Informática Industrial (2003 a 2005)',
    image: 'https://via.placeholder.com/468x60',
  },
  {
    title: 'UFMG',
    description: 'Graduação em Ciência da Computação (2006 a 2010)',
    image: 'https://via.placeholder.com/468x60',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio | Raphael Pena Cavalcanti</title>
      </Head>

      <HomeContainer>
        <Cover />
        <Section title="Education" items={educationItems} />
        <Section title="Projects" items={educationItems} />
        <Footer />
      </HomeContainer>
    </div>
  );
}
