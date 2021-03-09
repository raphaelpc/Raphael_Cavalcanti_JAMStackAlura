import styled, { css } from 'styled-components';
import breakpointsMedia from '../utils/breakpointsMedia';

const cssByBreakpointsMenuContainer = {
  sm: css`
    flex-direction: row;
    margin-top: 32px;
    padding: 0 16px;
    max-width: ${props => props.theme.breakpoints.sm}px;
  `,
  lg: css`
    max-width: ${props => props.theme.breakpoints.lg}px;
  `,
};

const cssByBreakpointsMenuContainerLastDiv = {
  sm: css`
      margin: 0;
      border: none;
      padding: 0;
      max-width: 332px;
  `,
};

const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  width: 100%;

  ${breakpointsMedia(cssByBreakpointsMenuContainer)}

  div {
    padding: 0;
    margin: 0;

    &:first-child {
      flex: 1;
    }

    &:last-child {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      justify-content: space-around;

      list-style: none;

      margin-top: 10px;
      border-top: 1px solid ${props => props.theme.colors.primary.main.color};
      padding: 10px;
      ${breakpointsMedia(cssByBreakpointsMenuContainerLastDiv)}

      a {
        text-align: center;
        display: block;
        text-decoration: none;
        color: white;
        transition: 200ms ease-in-out;

        padding-left: 15px;

        &:hover,
        &:focus {
            font-weight: 500;
            color: ${props => props.theme.colors.secondary.main.color};
        }
      }
    }
  }

  color: ${props => props.theme.colors.primary.main.color};
`;

export default MenuContainer;
