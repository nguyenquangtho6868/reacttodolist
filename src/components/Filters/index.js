import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchText ,filterPriority,filterStatus} from '../../redux/actions';
const { Search } = Input;
export default function Filters() {
  const [serchText,setSearchText]=useState("")
  const dispatch =useDispatch()
      const handleSearchTextChange =(e)=>{
     setSearchText(e.target.value)
     dispatch(searchText(e.target.value))
       
      }
     const handleFiltersChange =(value)=>{
      console.log(value)
      dispatch(filterPriority(value))
     }
     const handleFiltersStatus =(e)=>{
      console.log("======"+ e.target.value)
dispatch(filterStatus(e.target.value))
     }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={serchText} onChange={handleSearchTextChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleFiltersStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
        onChange={handleFiltersChange}
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
          <Select.Option type='primary' value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' type='primary' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
