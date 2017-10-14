import React from 'react'
import { render } from 'react-dom'
import TodoItem from '../todoitem'

 
export default class TodoList extends React.Component { 
	constructor(...args){
		super(...args)
	}
  

	render() {
		let list=this.props.list;

		let comps=list.map((item)=>{
			return <TodoItem item={item} key={item.id}/> 
		});
		return ( 
			<div className="list-container">
			<div className="title">React-TodoList</div>

			<div className="list">
			{comps}
			</div>

			<div className="footer">
		{/*footer*/}
		</div>
		</div>

		)
	}
}




