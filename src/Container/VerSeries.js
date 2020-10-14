import React, { Component } from 'react'

export default class VerSeries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serie: []
        }
    }
    componentDidMount() {
        if (this.props.location.state.serie == undefined)
            this.props.history.push('/')
        else {
            this.setState({ serie: this.props.location.state.serie })
        }
    }

    render() {
        return (
            <section id="intro" className="filme1" style={{ marginBottom: '410px' }}>
                <div>
                    <img className="imagem" src={this.state.serie.imagem} alt="Card image cap" />
                </div>
                <div className="tituloFilme">
                    <h2>{this.state.serie.titulo}</h2>
                </div>
                <div>
                    <div className="genero">
                        Gênero: <p>{this.state.serie.genero}</p>
                    </div>
                    <div className="temporada">
                        Temporada: <p>{this.state.serie.temporada}</p>
                    </div>
                    <div className="episodios">
                        Episódios: <p>{this.state.serie.episodios}</p>
                    </div>
                </div>
                <div className="sinopse">
                    Sinopse: <p>{this.state.serie.sinopse}</p>
                </div>
                <div className="elenco">
                    Elenco: <p>{this.state.serie.elenco}</p>
                </div>
                <div className="temporada">
                    Temporada: <p>{this.state.serie.temporada}</p>
                </div>
                <div className="episodios">
                    Episódios: <p>{this.state.serie.episodios}</p>
                </div>

            </section>

        )
    }
}
