import { useEffect, useState } from "react";
import { Button, Input,Space,Tooltip,message} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import api from '../cust_adapter/base';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth_actions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
const UpdateProfile=()=>{
  const [user,setUser]=useState();
  const [address,setAddress]=useState();
  const user_token=useSelector(state=>state.auth.user.access_token);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const update=()=>{
    console.log(user);
    api.put('profile',user,{
      headers:
      { "Authorization": `Bearer ${user_token}` }
    }).then(
      res=>{
        message.success('updated succesfully');
        dispatch(auth_actions.update(user));
        navigate('/');
      
    }).catch(err=>{
      console.log(err);
        message.error(err.data.response.message);
    })
  }
  useEffect(()=>{
    setUser(prev=>{return{...prev,address:address}});
  },[address])
  useEffect(()=>{
    api.get('profile',
    {
      headers:
              { "Authorization": `Bearer ${user_token}` }
            })
            .then(res=>{
      setUser(res.data.data);
      setAddress(res.data.data.address);
    }).catch(err=>{
      message.error(err.response.data.message);
    });
  },[])
  return(
    <div className="update_profiler">
      <Space direction="vertical" className="spacing">
        <h3>Update Your Profile</h3>
        <Input
          value={user?.user_name}
          placeholder="User Name"
          onChange={(e)=>setUser(prev=>{return{...prev,user_name:e.target.value}})}
          suffix={
            <Tooltip title="Your UserName">
              <InfoCircleOutlined
                style={{
                  color: 'rgba(0,0,0,.45)',
                }}
              />
              
            </Tooltip>
          }
    />
    <Input
      value={user?.email}
      disabled
      placeholder="Email"
      

      suffix={
        <Tooltip title="Your Email Address">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
    value={user?.first_name}
    onChange={(e)=>setUser(prev=>{return{...prev,first_name:e.target.value}})}
      placeholder="First Name"
      suffix={
        <Tooltip title="First Name">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
      value={user?.last_name}
      onChange={(e)=>setUser(prev=>{return{...prev,last_name:e.target.value}})}
      placeholder="Last Name"
      suffix={
        <Tooltip title="LastName">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
    value={user?.loan_granted}
     disabled
      placeholder="Loan Granted"
      suffix={
        <Tooltip title="Your Loan Granted">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
      value={user?.loan_used}
      disabled
      placeholder="Loan Used"
      suffix={
        <Tooltip title="Loan Used">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
    value={user?.phone_number}
      placeholder="Phone Number"
      onChange={(e)=>setUser(prev=>{return{...prev,phone_number:e.target.value}})}

      suffix={
        <Tooltip title="Phone Number">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <h4>Address</h4>
    <Input
    value={address?.city}
      placeholder="City"
      onChange={(e)=>setAddress(prev=>{return{...prev,city:e.target.value}})}

      suffix={
        <Tooltip title="City Where Your Live">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
    value={address?.sub_city}
      placeholder="Sub City"
      onChange={(e)=>setAddress(prev=>{return{...prev,sub_city:e.target.value}})}

      suffix={
        <Tooltip title="Sub City Where Your Live">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />

<Input
    value={address?.woreda}
      placeholder="Woreda"
      onChange={(e)=>setAddress(prev=>{return{...prev,woreda:e.target.value}})}

      suffix={
        <Tooltip title="Woreda Where Your Live">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
    value={address?.neighborhood}
      placeholder="Woreda"
      onChange={(e)=>setAddress(prev=>{return{...prev,neighborhood:e.target.value}})}

      suffix={
        <Tooltip title="Around Where You Live?">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
    <Input
    value={address?.house_number}
      placeholder="Woreda"
      onChange={(e)=>setAddress(prev=>{return{...prev,house_number:e.target.value}})}

      suffix={
        <Tooltip title="Around Where You Live?">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />

    <div className="profile_update">
      <Button onClick={()=>update()}>Save</Button>
      <Button className="profile_update_reset">Reset</Button>
      </div>
    </Space>

    </div>
  )
}
export default UpdateProfile;