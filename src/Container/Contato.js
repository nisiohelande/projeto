import React, { Component } from 'react'

export default class Contato extends Component {
    render() {
        return (
            <div className="intro-section">
                <div class="team">

                    <h1>Participantes</h1>
                    <div className="alunos">
                        <div className="col-lg-12">
                            <a href="#nisio"><img src="images/Nisio.jpg" alt="Nisio" width="300px"></img></a>
                            <a href="#Alexandro"><img src="images/Alexandro.jpg" alt="Alexandro" width="300px" /></a>
                        </div>
                    </div>

                    <div className="identificacao" id="nisio">
                        <span className="nome">Nisio Helande</span>
                        <p>R.A: 1930834</p>
                        <p>Cidade: Dois Vizinhos</p>
                        <p>CEP: 85.660-000</p>
                        <p>Estado: Paraná</p>
                        <p>Curso: Engenharia de Software</p>
                        <p>Período do curso: 4º período</p>
                    </div>

                    <div className="identificacao" id="Alexandro">
                        <span class="nome">Alexandro Santos</span>
                        <p>R.A: 2095343</p>
                        <p>Cidade: Realeza</p>
                        <p>CEP: 85.770-000</p>
                        <p>Estado: Paraná</p>
                        <p>Curso: Engenharia de Software</p>
                        <p>Período do curso: 3º período</p>
                    </div>
                </div>
            </div>

        )
    }
}
