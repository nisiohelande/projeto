import React, { Component } from 'react'


export default class Home extends Component {

    render() {
        return (
            <>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1><img src="images/star-wars-wallpaper.jpg"></img></h1>
                                <div className="home">
                                <h2>NísioEX Entretenimento</h2>
                                </div>
                                <div className="home1">
                                    <p>Um site para quem gosta de informações sobre o mundo dos
                                    filmes e séries. Veja o que está rolando no mundo do cinema e não perca nenhum lançamento.
                                Deixe suas críticas e sugestões. Contate-nos através da nossa página de contato.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}