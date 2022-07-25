import React from 'react'
import AppHeader from '../components/header'
import { Skeleton, Switch, Card, Avatar, Button } from 'antd';
import image from '../images/Vector.png'


const { Meta } = Card;

export default function Permission() {
  return (
    <div className='container-fluid'>
        <div className='permission'>
       <AppHeader />
       <Card bordered style={{width: 1200, height: 300, border: '2px solid #F0F0F0', background : '#F0F0F0'}} className="app_permission">
       <div className="get_product2">
      
          <h1 >ከሰረገላ ፍቃድ እየጠበቁ ነዉ</h1>
          <Button type="warning">ወደ ግብይት ይመለሱ</Button>
          <img src={image} />
        </div>
        </Card>
        </div> 
    </div>
  )
}
