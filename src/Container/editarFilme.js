import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import proj_config from '../Config/config';

export default class editarFilme extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            titulo: '',
            sinopse: '',
            elenco: '',
            genero: '',
            imagem: '',
            redirect: false
        }
    }
    componentDidMount() {
        if (this.props.location.state.filmes == undefined) {
            this.props.history.push('/')
        }
        else {
            const { titulo, sinopse, elenco, genero, imagem } = this.props.location.state.filmes
            this.setState({ titulo, sinopse, elenco, genero, imagem })
        }
    }

    salvarFilme = () => {
        const { titulo, sinopse, elenco, genero, imagem } = this.state;
        
        axios.put(
            `${proj_config}/filmes/${this.props.location.state.filmes._id}`, { titulo, sinopse, elenco, genero, imagem }
        ).then((res) => {
            this.setState({ redirect: '/filmes' })
        })
    }
    
    render() {
        return (
            <section className="intro-section">
            
                {
                    this.state.redirect && <Redirect to={this.state.redirect} />
                }

                <h1>Editar Filme</h1>
                <form className="container" style={{ padding: '80px' }}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome do Filme" value={this.state.titulo}
                            onChange={e => { this.setState({ titulo: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="3" placeholder="Sinopse" value={this.state.sinopse}
                            onChange={e => { this.setState({ sinopse: e.target.value }) }}>
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
                    <button type="button" className="btn btn-primary" onClick={this.salvarFilme}>Salvar Filme</button>
                </form>
            </section>
        )
    }
}
