import React, { Component } from 'react';
class Form extends Component {
        constructor(props) {
        super(props)
        this.state = {
            username: '',
            age: '',
            coname: '',
            email: '',
            monumber: '',
            comments: '',
            data: ''
            }
        
        }
        handleUsernameChange = (event) => {
            this.setState({
                username: event.target.value
            })
        }
        handleAgeChange = event => {
            this.setState({
                age: event.target.value
            })
        }
        handleConameChange = event => {
            this.setState({
                coname: event.target.value
            })
        }
        handleMonumberChange = event => {
            this.setState({
                monumber: event.target.value
            })
        }
        handleEmailChange = event => {
            this.setState({
                email: event.target.value
            })
        }
        handleCommentsChange = event => {
            this.setState({
                comments: event.target.value
            })
        }
        
      
        handleSubmit = event => {
            this.setState({data:(`${this.state.username} ${this.state.age} ${this.state.coname} ${this.state.monumber} ${this.state.email} ${this.state.comments}`)

            })
          
          event.preventDefault()
        }
      
        render() {
          return (
            
            <div className="formpage">
                <form onSubmit={this.handleSubmit} id="contactform">
                <h1>Contact Form</h1>
                <hr/>
            
            <label>
                User Name :
                <input type="text" className="textfield"   
                value={this.state.username} 
                onChange={this.handleUsernameChange} />
            </label>
            <label>
                Age :
                <input type="number" className="textfield"   
                value={this.state.age} 
                onChange={this.handleAgeChange}  />
            </label>
            <label>
                Company Name :
                <input type="text" className="textfield"   
                value={this.state.coname} 
                onChange={this.handleConameChange}  />
            </label>
            <label>
                Mobile Number :
                <input type="number" className="textfield"   
                value={this.state.monumber} 
                onChange={this.handleMonumberChange}  />
            </label>
            <label>
                Email :
                <input type="email" className="textfield"   
                value={this.state.email} 
                onChange={this.handleEmailChange}  />
            </label>
            <label>
                Comments :
                <textarea className="textareafield"   
                value={this.state.comments} 
                onChange={this.handleCommentsChange}></textarea>               
            </label>            
            <button type="submit" className="addprofile" >Add Profile</button>
            </form>
            <div className="formData">
                <h1>All form Data :</h1>{this.state.data}
            </div>
            </div>

            
          );
        }
      }
     

      export default Form;