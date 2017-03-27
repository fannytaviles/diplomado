import React, { Component } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }

  body {
    margin: 0;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Hero/>
          <Footer
            benefits={[{title: 'Música', description: 'Platzi music cuenta con miles de canciones'}, {title: 'Playlist', description: 'Crea tus propias playlist'}, {title: 'Nuevos lanzamientos', description: 'Sencillos y álbumnes de la semana'} ]}
          />
        </div>
      </ThemeProvider>
    )
  }
};