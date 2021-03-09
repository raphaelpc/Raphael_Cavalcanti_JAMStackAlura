import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AvatarContainer = styled.div`
  position: relative;

  width: 35vh;
  height: 35vh;

  &:after {
    content: '';
    
    position: absolute;
    top: 35px;
    bottom: 35px;
    right: 35px;
    left: 35px;

    border-radius: 50%;
    background: url('https://github.com/raphaelpc.png') no-repeat center;
    background-size: contain;

    box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.5);
  }

  div {
    position: relative;

    width: 35vh;
    height: 35vh;
    background: linear-gradient(${props => props.theme.colors.secondary.main.color},${props => props.theme.colors.primary.main.color});
    border-radius: 50%;
    animation: ${animate} 1s linear infinite;

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(${props => props.theme.colors.secondary.main.color},${props => props.theme.colors.primary.main.color});
      border-radius: 50%;

      &:nth-child(1) {
        filter: blur(5px);
      }

      &:nth-child(2) {
        filter: blur(10px);
      }

      &:nth-child(3) {
        filter: blur(20px);
      }

      &:nth-child(4) {
        filter: blur(55px);
      }
    }
  }
`;

export default AvatarContainer;
