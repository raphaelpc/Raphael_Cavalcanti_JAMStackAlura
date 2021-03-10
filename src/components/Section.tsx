import React from 'react';
import Card, { CardProps } from './Card';
import Grid from './foundation/layout/Grid';
import Text from './foundation/Text';

export interface SectionProps {
  title: string;
  items: CardProps[];
}

export default function Section({ title, items }: SectionProps) {
  return (
    <Grid.Container
      marginTop={{ xs: '10px', sm: '0px' }}
    >
      <Grid.Row>
        <Grid.Col textAlign="center">
          <Text
            tag="h1"
            color="primary.main"
            fontWeight="bold"
            fontSize={{
              xs: '2.2rem',
              sm: '3.5rem',
            }}
          >
            {title}
          </Text>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        {items.map(item => (
          <Grid.Col value={{ xs: 12, lg: 6 }}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Card {...item} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid.Container>
  );
}
