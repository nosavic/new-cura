import React from 'react'

const SignUp = () => {
  return (
    <div>
        
    <form>
        <label htmlFor="Birthday">
            <input type="date" />
            <input type="month" />
            <input type="year" />
        </label>

        <label htmlFor="email">
          <input type="email" />
        </label>
        <label htmlFor="password">
          <input type="password" />
        </label>
        <label htmlFor="code">
            <input type="number" name="" id="" />
        </label>
    </form>
        
        </div>
  )
}

export default SignUp