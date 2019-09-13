import React, { Component } from 'react';
//import RoutLinks from '../RouterLinks';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            data: ''
        }
    }
        handleUsernameChange = (event) => {
            this.setState({
                username: event.target.value
            });
        }
        handlePasswordChange = (event) => {
            this.setState({
                password: event.target.value
            });
        }
        handleSubmit = event => {
            this.setState({
                data: (`${this.state.username} 
                ${this.state.password}`)
            })
            event.preventDefault()
        }

    
    render(){
    return (<div className="login">
        <form onSubmit={this.handleSubmit} id="contactform2" >
            <h1>Login Page</h1>
            <hr />
            <label>UserName :
                <input type="text" name="username" 
                value={this.state.username}
                onChange={this.handleUsernameChange} />
            </label>
            <label>Password :
                <input type="password" name="Password" 
                value={this.state.password}
                onChange={this.handlePasswordChange} />
            </label>
                <button type="submit" className="signupbtn">Login</button>
        </form>
        <div className="formData">
                <h1>All form Data :</h1>{this.state.data}
            </div>
    </div>
       );
    }
}

export default Login;