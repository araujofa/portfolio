import React, { Component } from "react";
import './style.css';

export default class Header extends Component {
    render(){
        return(
            <nav>
                <div className="itens">

                    <h1>F A B I O</h1>

                    <ul>
                        <li>Home</li>
                        <li>Sobre mim</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>

                </div>
            </nav>
        );
    }
}