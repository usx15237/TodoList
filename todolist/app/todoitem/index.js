import React from 'react'
import { render } from 'react-dom'


export default class TodoItem extends React.Component { 
	constructor(...args){
		super(...args)
	}
 
	toggleTaskStatus(){ 

	}

	dleTask(){ 

	}

	render() {
		let {item}=this.props;
		return ( 
			<div className="item-container">
			<div className="inner-container" onClick={this.toggleTaskStatus.bind(this)}>
			<span className="cnk-container">
			<checkbox className="cnk"/>
			<span className="text">{item.text}</span> 
			</span>
			</div>
			<div className="del-container" onClick={this.dleTask.bind(this)}>
			<span>删除</span>
			</div>
			</div>
			)
	}
}



