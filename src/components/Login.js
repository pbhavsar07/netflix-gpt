import React, {useState} from 'react'
import Header from './Header'

const Login = () => {
  
  const [ isSignInForm, setIsSignInForm ]= useState(true);


  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className="absolute" >
        <img 
        className="w-44"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 mx-auto my-36 right-0 left-0 absolute p-12 m-4 bg-black bg-opacity-70 rounded-lg ">
        <h1 className="font-bold text-3xl p-4"> 
          { isSignInForm ? "Sign In" : "Sign up" }  
        </h1>
        { !isSignInForm && (
            <input 
              type="text"
              placeholder="Name"
              className="p-4 my-4 bg-gray-500" /> 
        )}


        <input 
          type="text"
          placeholder="Email address"
          className="p-4 my-4 bg-gray-700" /> 

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700" /> 
          
        <button className="p-4 my-6 rounded-lg bg-red-700 w-full">
          { isSignInForm ? "Sign In" : "Sign up" }  
          </button>

        <p className="py-4 cursor-pointer"  onClick={toogleSignInForm}> 
        { isSignInForm ? " New to netflix ? Sign up now" :
            "Already registered Sign In now" }
          </p>
      </form>
    </div>
  )
}

export default Login