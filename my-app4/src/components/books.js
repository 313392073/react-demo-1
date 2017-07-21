/**
 * Created by Administrator on 2017/7/21.
 */

import React, {Component} from 'react';
import Book from './book';

class Books extends Component{

	bookMarkup(){
		const books = this.props.books;
		let components = null;
		let booksItems = <span>NoItems!</span>;

		if(books.length > 0){
			components = books.map(item => {
				if(item.volumeInfo.imageLinks){
					booksItems  = (<Book
						item = {item}
					    key = {item.selfLink}
					/>);
				}
				return booksItems;
			});
		}
		return components;
	}


	render(){
		return(
			<div>
				{this.bookMarkup()}
			</div>
		);
	}

}

export default Books;