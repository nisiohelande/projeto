import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Hearder from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Container/Home'
import NovoFilme from './Container/NovoFilme'
import Filme from './Container/Filme'
import serie from './Container/Serie'
import VerFilme from './Container/VerFilme'
import VerSeries from './Container/VerSeries'
import novaSerie from './Container/novaSerie';
import Contato from './Container/Contato';
import editarFilme from './Container/editarFilme';
import editarSerie from './Container/editarSerie';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Hearder />
        <Route exact path='/' component={Home} />
        <Route exact path='/novo' component={NovoFilme} />
        <Route exact path='/nova' component={novaSerie} />
        <Route exact path='/filmes' component={Filme} />
        <Route exact path='/series' component={serie} />
        <Route exact path='/verFilme' component={VerFilme} />
        <Route exact path='/verSeries' component={VerSeries} />
        <Route exact path='/editarFilme' component={editarFilme} />
        <Route exact path='/editarSerie' component={editarSerie} />
        <Route exact path="/contato" component={Contato} />
        <Footer />
      </Router>
    );
  }
}

