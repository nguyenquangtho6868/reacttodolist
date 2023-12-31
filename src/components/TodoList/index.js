import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4 } from "uuid"
import { useState } from 'react';
import { todosFilterSelector,filterStatusSelector} from '../../redux/selectors';
export default function TodoList() {
  const [todoName,setTodoName]=useState('')
  const [priority,setPriority]=useState("Medium")
  const todoList =useSelector(todosFilterSelector)
  console.log(todoList)
 console.log(useSelector(filterStatusSelector))
  const dispatch =useDispatch()

  const handleInputChange =(e)=>{
    
    setTodoName(e.target.value)
    }
  const handlePriorityChange =(value)=>{
   
    setPriority(value)
  }
  console.log("todoName :" + todoName + "---priority :"+priority)
  const handleAddButtonClick=()=>{
    dispatch(addTodo({
      id:uuidv4(),
      name:todoName,
    
      priority:priority,
      completed:false,
    
    })
    
  )
setTodoName("")
setPriority("Medium")
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo)=><Todo  id={todo.id} key={todo.id} name={todo.name} completed={todo.completed}  prioriry={todo.priority}/>)}
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select  value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option  value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
