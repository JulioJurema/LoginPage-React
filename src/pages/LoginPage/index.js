import React, { Component } from "react";
import LoginCard from '../../components/LoginCard';
import RegisterCard from '../../components/RegisterCard';
import './index.css';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            login: true
        }
        this.entrar = this.entrar.bind(this);
        this.registrar = this.registrar.bind(this);
    }

    entrar(){
        this.setState({login: true});
        document.getElementById('goLogin').value = "Entrar";
    }

    registrar(){
        this.setState({login: false});
        document.getElementById('goLogin').value = "Registrar";
    }

    render(){
        return(
            <div className="container">
                <div className="cardContainer">
                    <div>
                        {
                            this.state.login ?
                            <div className="cardForm">
                                <LoginCard />
                                <button className="cardStatusButton" onClick={this.registrar}>Não possui uma conta?</button>
                            </div> :
                            <div className="cardForm">
                                <RegisterCard />
                                <button className="cardStatusButton" onClick={this.entrar}>Já tenho uma conta</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;