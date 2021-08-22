import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { login as loginAuth } from "./features/userSlice";
import { CircularProgress } from "@material-ui/core";
import Widget from "./Widget";



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
     auth.onAuthStateChanged(user => {
       if(user){
        dispatch(loginAuth({
          email: user.email,
          uid: user.uid,
          photourl: user.photoURL,
          displayname : user.displayName
        }))
        setLoading(false)
       }else{
       dispatch(logout());
       setLoading(false)
       }
     })
  }, [])

  if(loading){
    return(
      <div className="loader">
        <CircularProgress size={70} animating={true} />
      </div>
    )
  }
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="main-body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
