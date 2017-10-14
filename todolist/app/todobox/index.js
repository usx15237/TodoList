import React from 'react'
import { render } from 'react-dom'
import TodoForm from '../todoform'
import TodoList from '../todolist'


export default class TodoBox extends React.Component { 
	constructor(...args){ 
		super(...args) 
		this.state={
			list:[{ 
				id:0,
				status:0,
				text:'react0'
			},{
				id:1,
				status:0, 
				text:'react1'
			},{
				id:2,
				status:0,
				text:'react2'
			}]
        	}//注意格式
        }
        
        
        saveTask(text){
              this.setState({
                list:this.state.list.concat({
                        id:11,
                        status:0,
                        text:text

                })
        })  
      }



      delTask(item){
            let  item=this.state.list.findIndex((item1)=>{
                return item1.id===item.id;
        });
        let list=[...this.state.list];//let list=this.state.list;
        list.splice(index,1);
        this.state.
    }


    render() {
         let list=this.state.list;
        	//等效于 let {list}=this.state;
        	return (
        		<div>
        		<TodoList list={list} delTask={this.delTask.bind(this)}/> 
        		<TodoForm saveTask={this.saveTask.bind(this)}/>

        		</div>

        		)
        		
        	}
        }



