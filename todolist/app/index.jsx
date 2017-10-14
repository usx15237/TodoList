import React from 'react'
import TodoBox from './todobox'
import { render } from 'react-dom'
 
import './index.css';//使用require导入css文件


render(
    <TodoBox/>,  
    document.getElementById('root')
)
 