import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import React, {useEffect} from 'react'

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constant";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate('/')
    }).catch((error) => {
      navigate('/error')
    });

  }


  // trigger only once when component renders 
  // update store when user changes this state.
  // it can be managed from this place.
  // Since header compoent is alwasys available in my app 
  // puting onAuthStateChanged in header compomennt(Central place)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('in AuthState Change', user)
        if(user) {
          // if user is present (SignIn case) when user logs  In
          const {uid, email, displayName, photoURL } = user;
          // updating store 
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          navigate("/browse")
        } else {
          // user is signed out 
          dispatch(removeUser())
          navigate("/")
        }
    }) 

// when my component unmounts, i'm unsubscribing to my state.
// this useEffect will get called once, when component is loaded 
// but my header component can be called multiple times during my whole session.
// it will keep attaching event listeners in my browser..
// it will keep that functoin everytime this component is trigger.
// when my component is unmounted, I need unsubscribe it
  return () => unsubscribe(); 

}, [dispatch, navigate])

  return (
    <div className="flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      { user && <div className="flex p-2">
        <img
          className="w-12 h-12"
          src={user?.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignOut}
          className="font-bold text-white"> Sign Out </button>
      </div>}
    </div>
  );
};
export default Header;