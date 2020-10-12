import React, { Component } from 'react'
import Axios from 'axios'
import proj_config from '../Config/config'

export default class Filme extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmes: [],
            isLoading: false

        }
        this.renderFilmes = this.renderFilmes.bind(this)
        this.deletarFilme = this.deletarFilme.bind(this)
        this.verFilme = this.verFilme.bind(this)
        this.novoFilme = this.novoFilme.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        Axios.get(`${proj_config}/filmes`).then((res) => {
            const { filmes } = res.data.data
            this.setState({ filmes, isLoading: false })
        })

    }
    verFilme(filmes) {
        this.props.history.push('verFilme', { filmes })
    }
    deletarFilme(filmes) {
        Axios.delete(`${proj_config}/filmes/${filmes._id}`)
            .then(() => {
                alert('O Filme ' + filmes.titulo + ' foi excluido!!!')
                window.location.reload();
            })
    }
    novoFilme(filmes) {
        this.props.history.push('novo', { filmes })
    }
    editarFilme(filmes){
        this.props.history.push('editarFilme', {filmes})
    }
    renderFilmes(filmes) {
        return (
            <div className="intro-section">
                <li key={filmes._id} className="list-group-item">
                    <h3 className="text-center">{filmes.titulo}</h3>
                    <div className="text-center">
                        <input type='image' style={{ width: '350px' }} src={filmes.imagem} className="img-fluid img-thumbnail" />
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-info" style={{ marginRight: '20px' }}
                            onClick={() => this.verFilme(filmes)}
                        >Visualisar</button>
                        <button type="button" className="btn btn-danger" style={{ marginRight: '20px', backgroundColor: 'yellowgreen', color: '#2b0401' }}
                            onClick={() => this.editarFilme(filmes)}
                        >Editar</button>
                        <button type="button" className="btn btn-info" style={{ marginRight: '20px', backgroundColor: '#c7bcbb', color: '#2b0401' }}
                            onClick={() => this.novoFilme(filmes)}
                        >Novo</button>
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.deletarFilme(filmes)}
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
                        <span>Carregando Filmes </span>
                        :
                        <ul className="list-group">
                            {this.state.filmes.map(this.renderFilmes)}
                        </ul>
                }

            </div>
        )
    }
}
