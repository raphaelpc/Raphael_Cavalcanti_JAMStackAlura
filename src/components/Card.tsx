import React from 'react';
import CardContainer from '../styles/components/Card';
import Text from './foundation/Text';

export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export default function Card({ title, image, description }: CardProps) {
  return (
    <CardContainer>
      <Text
        tag="h1"
        fontWeight="bold"
        fontSize={{
          xs: '1rem',
          sm: '1.25rem',
        }}
      >
        {title}
      </Text>

      <img src={image} alt="Imagem descritiva do Card." />

      <p>{description}</p>
    </CardContainer>
  );
}
