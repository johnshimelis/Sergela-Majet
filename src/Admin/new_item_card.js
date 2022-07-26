import React, {useState, useRef} from 'react'
import { Card, Col, Row } from 'antd';
import {EditOutlined, DeleteOutlined, ConsoleSqlOutlined} from '@ant-design/icons';
import image_14 from '../images/product_14.png';

const { Meta } = Card;

function NewItemCard(props) {
  const [image, setImage] = useState('');
  const  fileSelectedHandler = (event) => {
      setImage(URL.createObjectURL(event.target.files[0]));
      
      
      }
const inputFile = useRef(null);
 const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click(); 
  };
  return (
 <div className="add_item_card">
  <div className='row'>
    <div className='column'>
     <input type='file' id='file' ref={inputFile} style={{display: 'none' }}
      accept="image/*" onChange={fileSelectedHandler} />
         <img src={props.src}  style={{width:150, height:125, marginLeft:-150, marginTop:-50, border:'none'}}/>
    </div>
  </div>
  </div>
     )
}

export default NewItemCard