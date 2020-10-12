import Axios from 'axios'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import proj_config from '../Config/config'

export default class novaSerie extends Component {
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
    salvarSerie = () => {
        const {
            titulo, sinopse, temporada, episodios, elenco, genero, imagem
        } = this.state
        Axios.post(`${proj_config}/series`, {
            titulo, sinopse, temporada, episodios, elenco, genero, imagem
        }).then((res) => {
            this.setState({ redirect: `/series`})
        })
    }

    render() {
        return (
            <section className="intro-section">
                {
                    this.state.redirect && <Redirect to={this.state.redirect} />
                }
                <h1>Nova Série</h1>
                <form className="container" style={{ padding: '80px' }}>
                    <div className="form-group" >
                        <input type="text" className="form-control" placeholder="Título do Série"
                            onChange={e => this.setState({ titulo: e.target.value })}
                        />
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="3" placeholder="Sinopse"
                            onChange={e => this.setState({ sinopse: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="3" placeholder="Temporada"
                            onChange={e => this.setState({ temporada: e.target.value })} >
                        </textarea>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" rows="3" placeholder="Episódios"
                            onChange={e => this.setState({ episodios: e.target.value })} >
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
                        onClick={this.salvarSerie}
                    >Salvar Série</button>
                </form>
            </section>


        )
    }
}
