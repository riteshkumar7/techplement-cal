import React, { useState,useEffect } from 'react'
import { FormField, Button, Form,  ModalContent,ModalActions,Modal } from 'semantic-ui-react'
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=()=>{

  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const [user,setUser]=useState();
  const [pass,setPass]=useState();
  const [data,setData]=useState();

  const navigate=useNavigate();

  useEffect(()=>{
    fetch("http://localhost:7000/getInfo")
    .then((temp)=>temp.json())
    .then((res)=>setData(res))
    .catch((e)=>console.log("error"))
  },[])
  console.log(data);

const handleLogin=()=>{
  if(!user || !pass){
    return;
  }
  let userInformation=JSON.parse(localStorage.getItem(user));
  if(pass===userInformation.password){
    sessionStorage.setItem("temp",user);
    navigate("/home");
  }
  else{
    alert("please enter valid password");
  }
}

  const saveAccount=()=>{
    axios.post(`http://localhost:7000/saveData`,{"username":username,"password":password})
    let userInformation={username:username,password:password};
      userInformation=JSON.stringify(userInformation);
      localStorage.setItem(username,userInformation);
  }

  const editAccount=()=>{
    axios.put(`http://localhost:7000/editData/${username}`,{"username":username,"password":password})
  }

  const deleteAccount=()=>{
    axios.delete(`http://localhost:7000/removeData/${username}`)
  }
    const [open, setOpen] = React.useState(false)
    return(
        <div>
            <nav className="login-nav">
                <p style={{marginLeft:'550px'}}>Calculator-Login</p>
            </nav>
            <div style={{display:'flex'}}>
            <div className="login">
                <div className='login-icon'>
                    <img src="icon.png" style={{width:'100px',margin:'10px 0 0 10px'}}/>
                </div>
            <Form>
    <FormField>
      <label>User Name</label>
      <input placeholder='User Name' type="text"
      onChange={(e)=>setUser(e.target.value)}
      />
    </FormField>
    <FormField>
      <label>Password</label>
      <input placeholder='Password' type="password" 
      onChange={(e)=>setPass(e.target.value)}/>
    </FormField>
    <Button type='submit' 
    style={{backgroundColor:'#75A47F',
    width:'100px',
    fontSize:'17px',
    fontFamily:'cursive',
    color:'#1A4D2E',
    marginLeft:'110px'
    }} 
    onClick={handleLogin}
    >
        Login
        </Button>
        <hr/>
        <Modal
      closeIcon
      open={open}
      trigger={ <Button type="submit"
      style={{backgroundColor:'#75A47F',
      width:'150px',
      fontSize:'17px',
      fontFamily:'cursive',
      color:'#1A4D2E',
      marginLeft:'85px'
         }}
     >
         SignUp
     </Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      style={{width:'500px'}}
    >
        <ModalContent>
        <Form>
    <FormField>
      <label>User Name</label>
      <input placeholder='User Name' onChange={(e)=>setUsername(e.target.value)}/>
    </FormField>
    <FormField>
      <label>Password</label>
      <input placeholder='Password' 
      onChange={(e)=>setPassword(e.target.value)}/>
    </FormField>
  </Form>
      </ModalContent>
      <ModalActions >
      <Button type='submit' onClick={saveAccount} style={{width:'80px',backgroundColor:'#75A47F',color:'#FCFFE0'}}>Save</Button>
      <Button type='submit' onClick={deleteAccount} style={{width:'80px',backgroundColor:'#75A47F',color:'#FCFFE0'}}>Delete</Button>
      <Button type='submit' onClick={editAccount} style={{width:'80px',backgroundColor:'#75A47F',color:'#FCFFE0'}}>Edit</Button>
      </ModalActions>
    </Modal>
  </Form>
            </div>
            <img src="template.jpg" className="img"/>
            </div>
        </div>
    )
}
export default Login;