import React, { Component } from 'react'

export default class VerFilme extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmes: []
        }
    }
    componentDidMount() {
        if (this.props.location.state.filmes == undefined)
            this.props.history.push('/')
        else {
            this.setState({ filmes: this.props.location.state.filmes })
        }
    }

    render() {
        return (

            <section className="filme1">
                <div>
                    <img className="imagem" src={this.state.filmes.imagem} />
                </div>
                <div className="tituloFilme">
                    <h2>{this.state.filmes.titulo}</h2>
                </div>
                <div className="genero">
                    Gênero: <p>{this.state.filmes.genero}</p>
                </div>
                <div className="sinopse">
                    Sinopse: <p className="card-text">{this.state.filmes.sinopse}</p>
                </div>
                <div className="elenco">
                    Elenco: <p className="card-text">{this.state.filmes.elenco}</p>
                </div>

            </section>


        )
    }
}
