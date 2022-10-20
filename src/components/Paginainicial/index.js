import React, { Component } from "react";
import './style.css'
import imgPerfil from '../../assets/perfil.jpg';

export default class Paginainicial extends Component {
    render(){
        return(
            <div className="container">

                <div className="txt-img">

                    <div className="txt">

                    <h1>Hello world!</h1>
                    <p>ioaosodjadjfajfa</p>

                    </div>

                    <img src={imgPerfil}/>

                </div>

            </div>
        );
    }
}