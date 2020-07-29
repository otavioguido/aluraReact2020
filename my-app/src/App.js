import React, { Component } from 'react';
import Menu from './component/Menu';
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './component/BannerMain'
import Carousel from './component/Carousel'
import FooterBase from './component/Footer'

class App extends Component {
  render() {
    return (
      <div style={{background: "#141414"}}>
        <Menu/>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"texto 1"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <FooterBase/>
      </div>
    );
  }
}

export default App;
