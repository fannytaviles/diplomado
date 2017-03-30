import React, { Component } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';
import theme2 from '../lib/theme2';

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