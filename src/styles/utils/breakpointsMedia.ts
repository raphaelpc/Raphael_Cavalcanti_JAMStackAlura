import { css, FlattenInterpolation } from 'styled-components';
import theme from '../theme';

const { breakpoints } = theme;

interface CssByBreakpoints {
  xs?: FlattenInterpolation<any>;
  sm?: FlattenInterpolation<any>;
  lg?: FlattenInterpolation<any>;
}

export default function breakpointsMedia(cssByBreakpoints: CssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  const breakpointsAvailable = Object.keys(breakpoints);

  // considera somente os breakpoints válidos
  const breakpointsFiltered = breakpointsNames.filter(
    // eslint-disable-next-line comma-dangle
    breakpointName => breakpointsAvailable.includes(breakpointName)
  );

  return breakpointsFiltered.map(breakpointName => css`
    @media screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoints[breakpointName]}
    }
  `);
}
