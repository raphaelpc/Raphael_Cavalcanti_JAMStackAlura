import styled from 'styled-components';

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  overflow: hidden;

  background: ${props => props.theme.colors.background.main.contrastText};
`;

export default CoverContainer;

export const CoverBox = styled.header`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 2.5rem 2rem;

  h1 {
    margin: 3rem 0 1rem 0;
  }
`;

export const About = styled.div`
  flex-direction: column;
  display: flex;

  color: ${props => props.theme.colors.background.main.color};
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  font-size: 1rem;

  span {
    margin-bottom: 0.5rem;
  }
`;
