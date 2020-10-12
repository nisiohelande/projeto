import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <a className="navbar-brand page-scroll" href="#page-top">
                            <img src="images/star-wars-wallpaper.jpg" height="30" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Filmes">Filmes</Link>
                            </li>
                            <li>
                                <Link to="/Series">Séries</Link> 
                            </li>
                            <li>
                                <Link to="/Contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
