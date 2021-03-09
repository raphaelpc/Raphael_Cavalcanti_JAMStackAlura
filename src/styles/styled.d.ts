// https://styled-components.com/docs/api#create-a-declarations-file
// import original module declarations
import 'styled-components';
import theme from './theme';

type Theme = typeof theme;

// and extend them!
declare module 'styled-components' {

  export interface DefaultTheme extends Theme {

  }
}
