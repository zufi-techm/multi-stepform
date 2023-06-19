import React, { useState } from 'react'
import {BsXCircleFill,BsCheckCircleFill, BsExclamationSquareFill, BsCheck} from "react-icons/bs"
const App = () => {
  //firstname
  const [firstname,setFirstname]=useState("");
  const [firstnameFocus,setFirstnameFocus]=useState(false);
  const [firstnameSuccess,setFirstnameSuccess]=useState(false);
  function handleFirstname(e){
    setFirstname(e.target.value)
    if(firstname[0] !==undefined && firstname !=""){
      setFirstnameSuccess(true)
    }else{
      setFirstnameSuccess(false)
    }
  }
//lastname
const [lastname,setlastname]=useState("");
const [lastnameFocus,setlastnameFocus]=useState(false);
const [lastnameSuccess,setlastnameSuccess]=useState(false);
function handlelastname(e){
  setlastname(e.target.value)
  if(lastname[0] !==undefined && lastname !=""){
    setlastnameSuccess(true)
  }else{
    setlastnameSuccess(false)
  }
}
//username
const [username,setusername]=useState("");
const [usernameFocus,setusernameFocus]=useState(false);
const [usernameSuccess,setusernameSuccess]=useState(false);
function handleusername(e){
  setusername(e.target.value)
  if(username.length >4){
    setusernameSuccess(true)
  }else{
    setusernameSuccess(false)
  }
}
//step1
let nameSuccess=false
if(usernameSuccess && lastnameSuccess && firstnameSuccess){
  nameSuccess=true;
}

//email
const [email,setemail]=useState("");
const [emailFocus,setemailFocus]=useState(false);
const [emailSuccess,setemailSuccess]=useState(false);
function handleemail(e){
  setemail(e.target.value)
 if(email.includes("@") && email.includes(".co") && email.length >4){
  setemailSuccess(true);
 }else{
  setemailSuccess(false);
 }
}
//address
const [address,setaddress]=useState("");
const [addressFocus,setaddressFocus]=useState(false);
const [addressSuccess,setaddressSuccess]=useState(false);
function handleaddress(e){
  setaddress(e.target.value)
  if(address[0] !==undefined && address !=""){
    setaddressSuccess(true)
  }else{
    setaddressSuccess(false)
  }
}
//step2
let email_addressSuccess=false;
if(emailSuccess && addressSuccess){
  email_addressSuccess=true;
}

//password
const [password,setpassword]=useState("");
const [passwordFocus,setpasswordFocus]=useState(false);
const [passwordSuccess,setpasswordSuccess]=useState(false);
function handlepassword(e){
  setpassword(e.target.value)
  if(password.length>6){
    setpasswordSuccess(true)
  }else{
    setpasswordSuccess(false)
  }
}

//confirmPassword
const [cnfrmPassword,setcnfrmPassword]=useState("");
const [cnfrmPasswordFocus,setcnfrmPasswordFocus]=useState(false);
const [cnfrmPasswordSuccess,setcnfrmPasswordSuccess]=useState(false);
function handlecnfrmPassword(e){
  setcnfrmPassword(e.target.value)
  if(cnfrmPassword === password){
    setcnfrmPasswordSuccess(true)
    console.log(password,cnfrmPassword);
  }else{
    setcnfrmPasswordSuccess(false)
  }
}
//step3
let passSuccess=false
if(passwordSuccess  && cnfrmPasswordSuccess){
  passSuccess= true;
}

//submit
let showbtn= false;
if(passSuccess && email_addressSuccess && nameSuccess){
  showbtn=true;
}


  return (
    <section className='flex items-center flex-col bg-gray-900 min-h-screen'>
   <section className='w bg-gray-900 p-6 rounded-xl my-6 mt-16'>
   <div className='left-0 right-0 text-white fixed top-0 bg-gray-900 flex items-start p-4 justify-center  step'>
        <div className='flex items-center'>
          <div className={!nameSuccess ?'h-6 w-6 bg-red-600 text-center rounded-full flex items-center justify-center text-2xl d':'h-6 w-6 bg-green-600 text-center rounded-full flex items-center justify-center text-3xl d green'}>{nameSuccess? <BsCheck  color='white'/>:"1"}</div><div className={!nameSuccess ?'bg-red-600 l h-1 text-gray-900 w-40':'green l h-1 text-gray-900 w-40'}>.</div>
        </div>
        <div className='flex items-center'>
          <div className={!email_addressSuccess ?'h-6 w-6 bg-red-600 text-center  flex items-center justify-center text-2xl rounded-full d':'h-6 w-6 bg-green-600 text-center rounded-full flex items-center justify-center text-3xl d green'}>{email_addressSuccess ? <BsCheck  color='white'/>:"2" }</div><div className={!email_addressSuccess ? 'bg-red-600 l h-1 text-gray-900 w-40':'green l h-1 text-gray-900 w-40'}>.</div>
        </div>
        <div className='flex items-center'>
          <div className={!passSuccess ? 'h-6 w-6 bg-red-600 text-center rounded-full  flex items-center justify-center text-2xl d':'h-6 w-6 bg-green-600 text-center rounded-full flex items-center justify-center text-3xl d green'}>3</div>
        </div>
      </div>
 <h1 className='w-full text-3xl  font-semibold sm:font-extrabold italic text-blue-100 my-4 h'>Multi-Step Form </h1>
 <div>
  <form className='flex flex-col items-center justify-center'>
  <h1 className='font-bold  text-white mt-10 italic title'>Name and username</h1>
   <div className='flex gap-4 relative  h-20 items-center justify-center div'>
    <input
     type='text' 
     placeholder='Firstname'
      className='w-full px-4 rounded-full outline-none input'
      onBlur={()=>setFirstnameFocus(false)}
      onFocus={()=>setFirstnameFocus(true)}
      onInput={(e)=>handleFirstname(e)}
      />
      {firstnameFocus &&<>
    {!firstnameSuccess && <>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>must not be empty</p>
    <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    </>}
    </>
    }
   {firstnameSuccess && <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
   </div>

   <div className='flex gap-4 relative   h-20 items-center justify-center div'>
    <input 
    type='text'
     placeholder='Lastname' 
     className='w-full px-4 rounded-full outline-none input'
     onFocus={()=>setlastnameFocus(true)}
     onChange={(e)=>handlelastname(e)}
     onBlur={()=>setlastnameFocus(false)}
     />
{lastnameFocus &&<>
    {!lastnameSuccess && <>
     <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>must not be empty</p>
    </>
    }
    </>
}
{lastnameSuccess&&<p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
   </div>

   <div className='flex gap-4 relative   h-20 items-center justify-center div'>
    <input 
    type='text' 
    placeholder='Username'
     className='w-full px-4 rounded-full outline-none input'
     onFocus={()=>setusernameFocus(true)}
     onChange={(e)=>handleusername(e)}
     onBlur={()=>setusernameFocus(false)}
     />
     {usernameFocus &&<>
    {!usernameSuccess &&<>
    <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>username already taken</p></>}
    </>
      }
     {usernameSuccess &&  <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
       </div>
  </form>

  <form className='flex flex-col items-center justify-center my-10'>
  <h1 className='font-bold  text-white  italic title'>Email and Address</h1>
   <div className='flex gap-4 relative  h-20 items-center justify-center div'>
    <input
     type='text' 
     placeholder='Email' 
     className='w-full px-4 rounded-full outline-none input'
     onFocus={()=>setemailFocus(true)}
     onChange={(e)=>handleemail(e)}
     onBlur={()=>setemailFocus(false)}
     />{emailFocus && <>
     {!emailSuccess && <>
      <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>Invalid email</p>
     </>}
     </>
     }
     {emailSuccess && <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
    
   </div>

   <div className='flex gap-4 relative   h-20 items-center justify-center div'>
    <input 
    type="text" 
    placeholder='Address' 
    className='w-full px-4 rounded-full outline-none input'
    onFocus={()=>setaddressFocus(true)}
    onChange={(e)=>handleaddress(e)}
    onBlur={()=>setaddressFocus(false)}
    />{addressFocus && <>
    {!addressSuccess && <>
      <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>must not be empty</p>
    </>}
    </>}
    {addressSuccess && <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
   </div>
  </form>

  <form className='flex flex-col items-center justify-center my-10'>
  <h1 className='font-bold  text-white  italic title'>Password</h1>
   <div className='flex gap-4 relative  h-20 items-center justify-center div'>
    <input 
    type='password' 
    placeholder='Password' 
    className='w-full px-4 rounded-full outline-none input'
    onFocus={()=>setpasswordFocus(true)}
    onChange={(e)=>handlepassword(e)}
    onBlur={()=>setpasswordFocus(false)}
    />{passwordFocus && <>
    {!passwordSuccess && <>
      <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>password is too weak</p>
    </>}
    </>}
    {passwordSuccess && <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
   </div>

   <div className='flex gap-4 relative   h-20 items-center justify-center div'>
    <input 
    type="password"
     placeholder='Confirm password'
      className='w-full px-4 rounded-full outline-none input'
      onFocus={()=>setcnfrmPasswordFocus(true)}
      onChange={(e)=>handlecnfrmPassword(e)}
      onBlur={()=>setcnfrmPasswordFocus(false)}
      />{cnfrmPasswordFocus && <>
      {!cnfrmPasswordSuccess && <>
        <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsXCircleFill color='red' size={"100px"}/></p>
    <p className='absolute bottom-0 pt-14 left-2 text-red-600 text-sm flex items-center font-bold err'><BsExclamationSquareFill/>passwords do not match</p>
      </>
      }
      </>
      }
      {cnfrmPasswordSuccess  && <p className='w-4 flex items-center h-4 bg-white rounded-full  dot'><BsCheckCircleFill color='green' size={"100px"}/></p>}
    </div>
  </form>

  <form className='flex flex-col items-center justify-center my-10'>
 {showbtn && <input type='submit' placeholder='Password' className='w-3/4 p-2 rounded-full text-white font-bold input shadow-lg bg-black'/> }
  </form>

 </div>
 
   </section>
    </section>
  )
}

export default App