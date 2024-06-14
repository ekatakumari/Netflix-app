import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>
   store.user
  )
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }
  useEffect(() => {
   const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    //unssubscribe when component un mount
    return ()=>unSubscribe();
  }, []);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={Logo}
        alt="netflix Logo"
      />
      {user &&<div className="flex p-2">
        <button className="py-2 px-4 bg-purple-800 text-white rounded-lg mx-4 my-2" onClick={handleGptSearchClick}>GPT Search</button>
        <img
          className="w-12 h-12 "
          alt="userIcon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          signOut
        </button>
      </div>}
    </div>
  );
};

export default Header;
