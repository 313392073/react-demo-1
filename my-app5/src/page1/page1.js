/**
 * Created by Administrator on 2017/7/25.
 */

import React, {Component} from 'react';

class Page1 extends Component{

	constructor(props){
		super(props);
        this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const setTopic = this.props.setTopic;
		//这里可以使用onChange拿到的值，也可以使用ref取值
		setTopic(this.$input.value);
	}


	render(){

        const {page1Topic} = this.props;

		return(
			<div>
				<h3>this is page1</h3>
				<p><strong>topic:</strong>{page1Topic}</p>
				<div>
					<input
                        defaultValue={page1Topic}
                        ref={el => this.$input = el}
                    />
					<button onClick={this.handleClick}>change Topic</button>
				</div>
			</div>
		);
	}
}

export default Page1;