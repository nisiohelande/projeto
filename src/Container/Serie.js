import React, { Component } from 'react'
import Axios from 'axios'
import proj_config from '../Config/config'

export default class Serie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serie: [],
            isLoading: false
        }

        this.renderSeries = this.renderSeries.bind(this)
        this.deletarSerie = this.deletarSerie.bind(this)
        this.verSerie = this.verSerie.bind(this)
        this.novaSerie = this.novaSerie.bind(this)

    }
    componentDidMount() {
        this.setState({ isLoading: true })
        Axios.get(`${proj_config}/series`).then((res) => {
            const { serie } = res.data.data
            this.setState({ serie: serie, isLoading: false })

        })

    }
    verSerie(serie) {
        this.props.history.push('verSeries', { serie })
    }

    deletarSerie(serie) {
        Axios.delete(`${proj_config}/series/${serie._id}`)
            .then(() => {
                alert('A série ' + serie.titulo + ' foi excluida!!!')
                window.location.reload();
            })
    }
    novaSerie(serie) {
        this.props.history.push('nova', { serie })
    }
    editarSerie(serie) {
        this.props.history.push('editarSerie', { serie })
    }

    renderSeries(serie) {
        return (
            <div className="intro-section">
                <li key={serie._id} className="list-group-item">
                    <h3 className="text-center">{serie.titulo}</h3>
                    <div className="text-center">
                        <input type='image' style={{ width: '300px' }} src={serie.imagem} className="img-fluid img-thumbnail" />
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-info" style={{ marginRight: '20px' }}
                            onClick={() => this.verSerie(serie)}
                        >Visualisar</button>
                        <button type="button" className="btn btn-danger" style={{ marginRight: '20px', backgroundColor: 'yellowgreen', color: '#2b0401' }}
                            onClick={() => this.editarSerie(serie)}
                        >Editar</button>
                        <button type="button" className="btn btn-info" style={{ marginRight: '20px', backgroundColor: '#c7bcbb', color: '#2b0401' }}
                            onClick={() => this.novaSerie(serie)}
                        >Novo</button>
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.deletarSerie(serie)}
                        >Deletar</button>
                    </div>

                </li>
            </div>
        )
    }

    render() {
        return (
            <div className="container">

                {
                    this.state.isLoading ?
                        <span> Carregando Series </span>
                        :
                        <ul className="list-group">
                            {this.state.serie.map(this.renderSeries)}
                        </ul>
                }

            </div>
        )
    }
}