import React, { useState} from "react";
import "./Login.css";
import logo from "./assets/logo.png";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import Alert from "./Alert";

function Login() {
  const [loninInput, setLoninInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [anim, setAnim] = useState("hidden");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (name === "") {
      showAlert("Please enter your name")
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
              dispatch(
                login({
                  email: res.user.email,
                  uid: res.user.uid,
                  photourl: profilePic,
                  displayname : name
                })
              );
            });
        })
        .catch((err) => showAlert(err.message));
    }
  };
  const handleSignin = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password).then(res => {
        dispatch(login({
            email: res.user.email,
            uid: res.user.uid,
            photourl: res.user.photoURL,
            displayname : res.user.displayName 
        }))
      }).catch((err) => showAlert(err.message))
  }

  const showAlert =(msg) => {
    setMessage(msg);
    setAnim("visible");
    setTimeout(()=> { 
       setAnim("hidden") 
    }, 3000)
  }

  return (
    <div className="login">
        <Alert toggle={anim} top="20%" left="40%" message={message} />
      <div className="sub-login">
        <div className="login-head">
          <h2>Linked</h2>
          <img src={logo} alt="" />
        </div>

        <form action="#">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full name"
          />
          <input
            onChange={(e) => setProfilePic(e.target.value)}
            type="text"
            placeholder="Profile url (optional)"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit" onClick={(e) => handleSignin(e)}>Sign in</button>
          <p>
            Not registerd{" "}
            <span>
              <a onClick={(e) => handleRegister(e)} href="#">
                Register Now
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
