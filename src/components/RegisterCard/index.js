import React, { Component } from "react";
import '../../pages/LoginPage/index.css';


class RegisterCard extends Component{
    render(){
        return(
            <div className="cardAlign">
                <h2>Register</h2>
                <div className="cardInputs"> 
                    <input type="text" placeholder="Username"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                </div>
                <button onClick={this.entrar}>REGISTER</button>
            </div>
        );
    }
}

export default RegisterCard;