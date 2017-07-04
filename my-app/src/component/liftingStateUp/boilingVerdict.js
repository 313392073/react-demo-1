/**
 * Created by Administrator on 2017/7/4.
 */

import React,{Component} from 'react';


//有些情况下不需要显式写constructor
class BoilingVerdict extends Component{

	render(){
		let text = "";
		if(this.props.celsius > 100){
			text =  "the water will boil.";
		}else{
			text = "the water would not boil."
		}
		return(<p>{text}</p>);
	}
}
export default BoilingVerdict;