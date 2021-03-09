import styled from 'styled-components';

const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 100vh;
  overflow: hidden;
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
  display: flex;
  flex-direction: column;

  font-family: "Roboto Slab", serif;
  font-weight: 400;
  font-size: 1rem;

  span {
    & + span {
      margin-top: 0.5rem;
    }
  }
`;

export const Networks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  
  svg {
    color: ${props => props.theme.colors.secondary.main.contrastText};
    fill: ${props => props.theme.colors.secondary.main.contrastText};
    transition: 200ms ease-in-out;
    cursor: pointer;

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.secondary.main.color};
        fill: ${props => props.theme.colors.secondary.main.color};
    }

    & + svg {
      margin-left: 1rem;
    }
  }
`;
