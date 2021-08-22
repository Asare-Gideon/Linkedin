import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideoIcon from "@material-ui/icons/VideoLabel";
import DateRangeIcon from "@material-ui/icons/DateRange";
import SubjectIcon from "@material-ui/icons/Subject";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const userId = useSelector(selectUser);

  useEffect(() => {
    db.collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("post").add({
      name: userId.displayname,
      description: "this is my description",
      message: input,
      photourl: userId.photourl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="feed">
      <div className="input-container">
        <div className="feed-input">
          <CreateIcon />
          <form action="#">
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(e)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="input-options">
          <InputOption Icon={ImageIcon} iconColor="#70B5f9" text="Image" />
          <InputOption Icon={VideoIcon} iconColor="#7FC15E" text="Video" />
          <InputOption Icon={DateRangeIcon} iconColor="#E7A33E" text="Event" />
          <InputOption
            Icon={SubjectIcon}
            iconColor="#FC9295"
            text="Write article"
          />
        </div>
      </div>
      {/* post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.data.name}
            description={post.data.description}
            message={post.data.message}
            photourl={post.data.photourl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
