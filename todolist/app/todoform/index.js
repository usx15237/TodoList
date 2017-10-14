import React from 'react'
import { render } from 'react-dom'


export default class TodoItem extends React.Component { 
	constructor(...args){
		super(...args)
		// this.state={value:""}
	}

	// fn(event)
	// {
	// 	this.setState({     
	// 		value:event.target.value    
	// 	})
	// }

	pushTask(e){
		e.preventDefault();
		let {saveTask}=this.props;
		// saveTask(this.state.value)
		let {value}=this.ipt;//等效于 let value=ipt.value
		saveTask(value)
	}
	render() {
		return ( 
			<div className="form-container">
			<form className="form">
			<div className="ipt-container">
			<input type="text" placeholder="想做点什么?" ref={(ipt)=>{this.ipt=ipt}} />	
			</div>
			<div className="btn-container">
			<button onClick={this.pushTask.bind(this)}>保存任务</button>
			</div>
			</form>
			</div>
			)
			/* ref={(ipt)=>{this.ipt=ipt}} 等效于let ipt=this.refs['sp']*/
		}
	}

