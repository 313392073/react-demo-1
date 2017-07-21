/**
 * Created by Administrator on 2017/7/21.
 */

import React, {Component} from 'react';

const style = {
	linkStyle: {
		float: 'left',
		border: '1px solid red',
		padding: '2px',
		margin: '5px'
	},
	imgStyle: {

	}
};


const thumbnail = (item,link) => {
	return (
		<a href={link} style={style.linkStyle}>
			<img
				src={item.volumeInfo.imageLinks.thumbnail}
				style={style.imgStyle}/>
		</a>
	);
};

class Book extends Component{
	constructor(props){
		super(props);
	}


	render(){
		const {item} = this.props;
		const link = item.volumeInfo.canonicalVolumeLink;
		return(
			<div>
				{thumbnail(item,link)}
			</div>
		);
	}

}

export default Book;