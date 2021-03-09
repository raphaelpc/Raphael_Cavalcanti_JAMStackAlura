import React from 'react';
import Grid from './foundation/layout/Grid';
import Text from './foundation/Text';

interface SectionItem {
  title: string;
  description: string;
  image: string;
}

export interface SectionProps {
  title: string;
  items: SectionItem[];
}

export default function Section({ title }: SectionProps) {
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
        <Grid.Col value={{ xs: 12, sm: 6 }}>
          <h1>Education</h1>
        </Grid.Col>

        <Grid.Col value={{ xs: 12, sm: 6 }}>
          <h1>Education</h1>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}
