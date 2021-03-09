// @ts-nocheck
import React, { ReactNode } from 'react';
import { get } from 'lodash';
import styled from 'styled-components';
import propToStyle, { PropToStyle } from '../../styles/utils/propToStyle';
import { TextStyleVariants } from './TextStyleVariants';

interface TextBaseProps {
  variant?: string;
  color?: string;
  textAlign?: PropToStyle;
  fontSize?: PropToStyle;
  fontWeight?: PropToStyle;
}

const TextBase = styled.span<TextBaseProps>`
  color: ${props => get(props.theme, `colors.${props.color}.color`)};
  ${props => TextStyleVariants[props.variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('fontSize')}
  ${propToStyle('fontWeight')}
`;

interface TextProps extends TextBaseProps {
  children: ReactNode;
  tag?: string;
  [propName: string]: any;
}

// p -> parágrafo
// h1, h2, ..., h6 -> títulos
// span -> textos inline
export default function Text({
  children,
  tag,
  variant,
  ...rest
}: TextProps) {
  // TODO: "as" dá erro de compilação typescript
  return (
    <TextBase
      as={tag || 'span'}
      variant={variant || 'paragraph1'}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </TextBase>
  );
}
