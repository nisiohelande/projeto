import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import proj_config from '../Config/config';

export default class editarSerie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titulo: '',
            sinopse: '',
            temporada: '',
            episodios: '',
            elenco: '',
            genero: '',
            imagem: '',
            redirect: false
        }
    }
    componentDidMount() {
        if (this.props.location.state.serie == undefined) {
            this.props.history.push('/')
        }
        else {
            const { titulo, sinopse, temporada, episodios, elenco, genero, imagem } = this.props.location.state.serie
            this.setState({ titulo, sinopse, temporada, episodios, elenco, genero, imagem })
        }
    }

    salvarSerie = () => {
        const { titulo, sinopse, temporada, episodios, elenco, genero, imagem } = this.state;

        axios.put(
            `${proj_config}/series/${this.props.location.state.serie._id}`, { titulo, sinopse, temporada, episodios, elenco, genero, imagem }
        ).then((res) => {
            this.setState({ redirect: '/series' })
        })
    }

    render() {
        return (
            <section className="intro-section">
                {
                    this.state.redirect && <Redirect to={this.state.redirect} />
                }

                <h1>Editar Serie</h1>
                <form className="container" style={{ padding: '80px' }}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome da Serie" value={this.state.titulo}
                            onChange={e => { this.setState({ titulo: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Sinopse" value={this.state.sinopse}
                            onChange={e => { this.setState({ sinopse: e.target.value }) }}>
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="3" placeholder="Temporada" value={this.state.temporada}
                            onChange={e => this.setState({ temporada: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="3" placeholder="Episódios" value={this.state.episodios}
                            onChange={e => this.setState({ episodios: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="4" placeholder="Elenco" value={this.state.elenco}
                            onChange={e => { this.setState({ elenco: e.target.value }) }} >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="4" placeholder="Genero" value={this.state.genero}
                            onChange={e => { this.setState({ genero: e.target.value }) }} >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Link da imagem" value={this.state.imagem}
                            onChange={e => { this.setState({ imagem: e.target.value }) }} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.salvarSerie}>Salvar Série</button>
                </form>
            </section>
        )
    }
}
