import styled from 'styled-components';

const CardContainer = styled.div`
  background: ${props => props.theme.colors.backgroundCard.main.contrastText};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  text-align: center;

  margin-bottom: 1rem;

  h1 {
    padding-top: 0.75rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  img {
    width: 100%;
  }

  p {
    padding-bottom: 0.75rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export default CardContainer;
