import React from 'react';
class Book extends React.Component {
	constructor(props) {
	    super(props);
	}
	render(){
		let book = this.props.book;
		if (book !== undefined){
			return (
				<div >
				    <h3>{book.book}</h3>
				    <p>{book.username}</p>
				</div>
			)	
		}
		return(
			<li></li>
		)
	}
}


export default Book;