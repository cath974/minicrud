
import React from 'react';
import Input from './Input';

const AddUserForm = ({name, username, email, handleInputChange, addUser}) => (
   
  <form onSubmit={addUser}>
  <Input inputType={'text'}
             title= {'Full Name'} 
             name= {'name'}
             value={name} 
             handleChange = {handleInputChange}
             /> 
  <Input inputType={'text'}
             title= {'Username'} 
             name= {'username'}
             value={username} 
             handleChange = {handleInputChange}
             />
  <Input inputType={'text'}
             title= {'Email'} 
             name= {'email'}
             value={email} 
             handleChange = {handleInputChange}
             />          
   <button className="btn btn-success mt-2"> Add user </button>

  </form>
    
  )

    export default AddUserForm;

    