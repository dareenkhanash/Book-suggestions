import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUp from './components/SignUp.jsx';
import Books from './components/books.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  this.getData();
 //console.log(this.state.users)
  }
  getData(){
  	var that=this
  	$.ajax({
  		type: 'GET',
  		url:"/users",
  		success:(data)=>{

  		that.setState({
          users: data
        })
        console.log(that.state.users);
  		}

  	})
  }

  render() {
    return (
     <div><SignUp getData={this.getData.bind(this)} />
     <Books users={this.state.users}/>
     </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
export default App;