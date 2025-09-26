import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
// import { netflixBackgroundImage } from '../utils/constant';
// import myImage from "../../assets/netflix-background.jpg"; 
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
 import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_LOGO } from '../utils/constant';



const Login = () => {
  
  const [ isSignInForm, setIsSignInForm ]= useState(true);
  const [errMessage, setErrMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value,password.current.value)
    setErrMessage(message);
    if(message) return;

    // Signin or Signup logic
    if(!isSignInForm) {
        // SignUp logic
        console.log("name: ",username.current.value);
        console.log("name: ",email.current.value);
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          console.log("user: ",user);
          console.log("logo: ",USER_LOGO);
          // console.log("name: ",username.current.value);

            updateProfile(user, {
              displayName: username.current.value,
              photoURL: USER_LOGO
            }).then(() => {

              console.log("UPDATE PROFILE: ",auth.currentUser);
              const { uid, email, displayName, photoURL } = auth.currentUser; 
              // auth is the current user taking updated value from the user.
              dispatch(
                addUser({ 
                  uid: uid, 
                  email: email,
                  displayName: displayName, 
                  photoURL: photoURL 
                }))
            }).catch((error) => {
              setErrMessage(error.message);
            });

        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMessage(errorMessage);
          // console.log(errorCode +" "+errorMessage);
        });

    } else {

      // SignIn logic 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            console.log("SignedIn User: ",userCredential);
            // Signed in 
            // const user = userCredential.user;
            // navigate("/browse")
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setErrMessage(errorMessage);
                  // console.log(errorCode +" "+errorMessage);
          });

    }

  }

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className="absolute" >
        <img
        src="/netflix-background.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 mx-auto my-36 right-0 left-0 absolute p-12 m-4 bg-black bg-opacity-70 rounded-lg ">
        <h1 className="font-bold text-3xl p-4"> 
          { isSignInForm ? "Sign In" : "Sign up" }  
        </h1>
        { !isSignInForm && (
            <input 
              ref={username}
              type="text"
              placeholder="Name"
              className="p-4 my-4 bg-gray-500" /> 
        )}


        <input 
        ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 bg-gray-700" /> 

        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700" /> 

        <p className="text-red-500 font-bold text-lg py-3">{ errMessage }</p>
        <button className="p-4 my-6 rounded-lg bg-red-700 w-full"
        onClick={() => {handleButtonClick()}}>
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