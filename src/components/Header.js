import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import React, { useEffect } from 'react'

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  };

  const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate('/')
    }).catch((error) => {
      navigate('/error')
    });

  };


  // trigger only once when component renders 
  // update store when user changes this state.
  // it can be managed from this place.
  // Since header compoent is alwasys available in my app 
  // puting onAuthStateChanged in header compomennt(Central place)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('in AuthState Change', user)
      if (user) {
        // if user is present (SignIn case) when user logs  In
        const { uid, email, displayName, photoURL } = user;
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
      {user && <div className="flex p-2">
        {showGptSearch && (<select
          onChange={handleLanguageChange}
          className="p-2 m-2 bg-gray-900 text-white">
          {
          SUPPORTED_LANGUAGES.map((lang) => ( 
            <option key={lang.identifier} value={lang.identifier}>
                {lang.name}</option> )
          )}
            
        </select>)}
        <button
          onClick={handleGptSearch}
          className="py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg ">
          {showGptSearch ? "Homepage" : "GPT Search"} </button>

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