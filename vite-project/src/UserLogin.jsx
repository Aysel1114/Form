import { Component } from "react";
import "./App.css";

class UserLogin extends Component {
    state = {
        email: "",
        password: "",
        emailWarning: "",
        passwordWarning: ""
    }

    inputEmail = (event) => {
        const emailValue = event.target.value;
        this.setState({email: emailValue});
        if(emailValue && !emailValue.endsWith(".ru")){
            this.setState({emailWarning: "Yalnız .ru domenlərinə icazə verilir."});
        }
        else {
            this.setState({emailWarning: ""});
        }
    } 

    inputPassword = (event) => {
        const passwordValue = event.target.value;
        this.setState({password: passwordValue});
        if(passwordValue && passwordValue.length < 8){
            this.setState({passwordWarning: "Ən azı 8 simvol."});
        }
        else {
            this.setState({passwordWarning: ""});
        }
    }

    render() {
        return (
            <div className = "container">
                <h2>Qeydiyyat</h2>
                <label>
                    Email
                        <input type = "email" placeholder="Enter your email" onChange={this.inputEmail} required/>
                    <p>{this.state.emailWarning}</p>
                </label>
                <label>
                    Parol
                    <input type = "password" placeholder="Enter your password" onChange={this.inputPassword} required/>
                    <p>{this.state.passwordWarning}</p>
                </label>
                <button type = "button">Login</button>
            </div>
        )
    }
}

export default UserLogin;