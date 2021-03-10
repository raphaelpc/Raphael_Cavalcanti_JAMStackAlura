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
    image: 'https://via.placeholder.com/450x150',
  },
  {
    title: 'UFMG',
    description: 'Graduação em Ciência da Computação (2006 a 2010)',
    image: 'https://via.placeholder.com/450x150',
  },
];

const projectItems = [
  {
    title: 'Instalura',
    description: 'Treinamento do Bootcamp JAM-Stack da Alura (2021)',
    image: 'https://via.placeholder.com/450x150',
  },
  {
    title: 'SIEV',
    description: 'Sistema de Inscrições em Eventos da ALMG (2020)',
    image: 'https://via.placeholder.com/450x150',
  },
  {
    title: 'SISNOR',
    description: 'Sistema de Serviços Notariais do TJMG (2015-2018)',
    image: 'https://via.placeholder.com/450x150',
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
        <Section title="Projects" items={projectItems} />
        <Footer />
      </HomeContainer>
    </div>
  );
}
