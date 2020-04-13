import React from 'react';
import Input from './Input';

const EditUserForm = ({name, username, email, handleInputChange, updateUser}) => (
    <form>
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
      <button onClick={updateUser} className="btn btn-success mt-2"> Update </button>
      
    </form>
  )


export default EditUserForm;





    