import React, { Component } from "react";
import '../../pages/LoginPage/index.css';

class LoginCard extends Component{
    render(){
        return(
            <div className="cardAlign">
                <h2>Login</h2>
                <div className="cardInputs">
                    <input type="text" placeholder="Username"></input>
                    <input type="password" placeholder="Password"></input>
                </div>
                <button onClick={this.entrar}>SIGN IN</button>
            </div>
        );
    }
}
 
export default LoginCard;