import React, { Component } from 'react';
//import RoutLinks from '../RouterLinks';
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            username: '',
            email: '',
            psw: '',
            pswepeat: '',
            remember: '',
            data: ''
        }

    }
    handleFullnameChange = (event) => {
        this.setState({
            fullname: event.target.value
        });
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    handlePswChange = (event) => {
        this.setState({
            psw: event.target.value
        });
    }
    handlePswepeatChange = (event) => {
        this.setState({
            pswepeat: event.target.value
        });
    }
    handleRememberChange = (event) => {
        this.setState({
            remember: event.target.value
        });
    }
    handleSubmit = event => {
        this.setState({
            data: (` ${this.state.fullname} 
            ${this.state.username} 
            ${this.state.email} 
            ${this.state.psw} 
            ${this.state.pswepeat} 
            ${this.state.remember}`)
        })
        event.preventDefault()
    }

    render() {
        return (<div className="login"><form onSubmit={this.handleSubmit} id="contactform2" ><h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="email"><b>Full Name</b>
                <input type="text" placeholder="Full Name" required
                    value={this.state.fullname}
                    onChange={this.handleFullnameChange} />
            </label>

            <label for="email"><b>UserName</b>
                <input type="text" placeholder="UserName" required
                    value={this.state.username}
                    onChange={this.handleUsernameChange} />
            </label>

            <label for="email"><b>Email</b>
                <input type="email" placeholder="Enter Email" required
                    value={this.state.email}
                    onChange={this.handleEmailChange} />
            </label>

            <label for="psw"><b>Password</b>
                <input type="password" placeholder="Enter Password" required
                    value={this.state.psw}
                    onChange={this.handlePswChange} />
            </label>

            <label for="psw-repeat"><b>Repeat Password</b>
                <input type="password" placeholder="Repeat Password" required
                    value={this.state.pswepeat}
                    onChange={this.handlePswepeatChange} />
            </label>

            <label>
                <input type="checkbox" checked="checked"
                    value={this.state.remember}
                    onChange={this.handleRememberChange} /> Remember me
    </label>

            <p>By creating an account you agree to our <a href="#">Terms  Privacy</a>.</p>

            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>

        </form>
            <div className="formData">
                <h1>All form Data :</h1>{this.state.data}
            </div>
        </div>
        );
    }
}

export default SignUp;