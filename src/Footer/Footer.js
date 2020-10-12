import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container">
                    <div className="footer-copyright text-center py-3">NísioEX Entretenimento
                        <Link to="/Contato"> Contato</Link>
                        <h5>Nisio Helande</h5>
                        <h5>Alexandro S. dos Santos</h5>
                    </div>
                </div>
            </footer>

        )
    }
}
