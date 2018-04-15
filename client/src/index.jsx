import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import books from './components/books.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  this.getData();
 console.log(this.state.users)
  }
  getData(){
  	var that=this
  	$.ajax({
  		type: 'GET',
  		url:"/",
  		success:(data)=>{
console.log(data)
  		that.setState({
          users: data
        })
  		}
  	})
  }

  render() {
    return (
     <div><SignUp />
     <books users={this.state.users} />
     </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
