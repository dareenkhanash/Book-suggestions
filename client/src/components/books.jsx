import React from 'react';
import Book from './Book.jsx';

class books extends React.Component {
  constructor(props) {
      super(props);
  }
  render(){
    let arr = [];

    let books = this.props.users

    if (books !== undefined){
      books.forEach((book) => {
        arr.push(<Book book={book} />)
      })
    }
    return(
      <div >
          {arr}
      </div>
    )

  }
}
export default books;