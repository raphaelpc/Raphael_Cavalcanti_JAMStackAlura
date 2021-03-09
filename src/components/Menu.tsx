import React from 'react';
import MenuContainer from '../styles/components/Menu';
import Text from './foundation/Text';

const links = [
  {
    texto: 'Educação',
    url: '/faq',
  },
  {
    texto: 'Projetos',
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
      </div>
    </MenuContainer>
  );
}
