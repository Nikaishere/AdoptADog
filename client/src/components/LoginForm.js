import React, { useEffect, useState } from "react";



  const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
      const handleSubmit = (event) => {
        event.preventDefault()
      }

   return(
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          value={username}
          name='Username'
          placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}>
        </input>
      </div>
      <div>
        <input
          type='password'
          value={password}
          name='Password'
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}>
        </input>
      </div>
      <button>
        Login
      </button>
      </form> 
   )   

  }

  export default LoginForm;