import { Button } from 'antd'
import React from 'react'
import success from '../images/success.png';

function Success() {
  return (
    <div className='success'>
        <div className='container-fluid'>
            <div className='image'>
             <img src={success} className="logo"/>
            </div>
            <div className='body'>
              <h2 style={{marginLeft:0, marginTop:20}}>እንኳን ድስ አለዎ!</h2>
              <h3 style={{marginLeft:-50, marginTop:20}}>ትዕዛዞ በተሳካ ሁኔታ ተሳክቷል!</h3>
            </div>
            
            <Button>እሺ</Button>
            </div>

    </div>
  )
}

export default Success;