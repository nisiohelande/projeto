import Axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import proj_config from '../Config/config';

export default class NovoFilme extends Component {
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

    salvarFilme = () => {


        const {
            titulo, sinopse, elenco, genero, imagem
        } = this.state
        Axios.post(`${proj_config}/filmes`, {
            titulo, sinopse, elenco, genero, imagem
        }).then(() => {
            this.setState({ redirect: '/filmes' })
        })

    }

    render() {
        return (
            <section className="intro-section">
                {
                    this.state.redirect &&
                    <Redirect to={this.state.redirect} />
                }
                <h1>Novo Filme</h1>
                <form className="container" style={{ padding: '80px' }}>
                    <div className="form-group" >
                        <input type="text" className="form-control" placeholder="Título do Filme"
                            onChange={e => this.setState({ titulo: e.target.value })}
                        />
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="3" placeholder="Sinopse"
                            onChange={e => this.setState({ sinopse: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="4" placeholder="Elenco"
                            onChange={e => this.setState({ elenco: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="4" placeholder="Genero"
                            onChange={e => this.setState({ genero: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <input type="text" className="form-control" placeholder="Link da Imagem"
                            onChange={e => this.setState({ imagem: e.target.value })} />
                    </div>

                    <button type="button" className="btn btn-primary"

                        onClick={this.salvarFilme}
                    > Salvar Filme</button>
                </form>
            </section >


        )
    }
}
