import React from 'react';
import MenuContainer from '../styles/components/Menu';
import Moon from '../styles/img/Moon';
import Text from './foundation/Text';

const links = [
  {
    texto: 'Education',
    url: '/faq',
  },
  {
    texto: 'Projects',
    url: '/sobre',
  },
];

export default function Menu() {
  return (
    <MenuContainer>
      <div>
        <Text
          color="primary.main"
          fontSize={{
            xs: '1.5rem',
            sm: '2rem',
          }}
          fontWeight="bold"
        >
          {'<Portfolio/>'}
        </Text>
      </div>

      <div>
        {
          links.map(link => ((
            <li key={link.texto}>
              <Text
                tag="a"
                href={link.url}
                fontSize={{
                  xs: '1.2rem',
                  sm: '1.25rem',
                }}
              >
                {link.texto}
              </Text>
            </li>
          )))
        }

        <Moon />
      </div>
    </MenuContainer>
  );
}
