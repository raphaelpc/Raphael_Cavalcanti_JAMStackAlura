import React from 'react';
import ProjectsContainer from '../styles/components/Projects';
import Grid from './foundation/layout/Grid';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Grid.Container
        marginTop={{ xs: '10px', sm: '0px' }}
      >
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, sm: 5 }}
            offset={{ xs: 0, sm: 1 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <h1>Raphael Cavalcanti</h1>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, sm: 6 }}
          >
            <h1>Raphael Cavalcanti</h1>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </ProjectsContainer>
  );
}
