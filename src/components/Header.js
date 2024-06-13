import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>
   store.user
  )
  console.log(user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
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
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix Logo"
      />
      {user &&<div className="flex p-2">
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
