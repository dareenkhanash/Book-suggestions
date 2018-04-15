import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Books from './books.jsx';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
     this.state ={states:{
      username: "",
      password:"",
      book:""
     }}
     this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }
  onChange (e) {
    var states=this.state.states
   var name=e.target.name;
   var value=e.target.value;
    states[name]=value;
    this.setState({
       states
    });
  }
 
  save () {
    var that=this
    console.log("save");
    console.log(this.state.states)
    $.ajax({
      type: 'POST',
      url: '/',
      data: that.state.states,
      success: function (msg) {
    console.log("success");
    //that.props.getData();
      },
      error: function (request, status, error) {
        console.log(error);
      }
    });
   
  }

// <p>Password</p><input type="text" name="password" onChange={this.onChange}/>
  render() {
    return (
     <div><p>User Name</p><input type="text" name="username" onChange={this.onChange}/>
     
      <p>Book</p><input type="text" name="book" onChange={this.onChange}/>
      <button onClick={this.save} >Add Book</button>

      </div>

    )
  }
}
export default SignUp;